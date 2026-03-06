# backend/main.py
from datetime import date
from uuid import uuid4
from fastapi import FastAPI, Depends, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
from sqlalchemy import text
from .database import engine, SessionLocal, Base
from . import models
import os
import re
import shutil

# --- Database setup ---
Base.metadata.create_all(bind=engine)

def ensure_booking_columns():
    required_columns = {
        "phone": "VARCHAR",
        "credential_type": "VARCHAR",
        "credential_attachment_path": "VARCHAR",
        "resume_attachment_path": "VARCHAR",
        "id_number": "VARCHAR",
        "nin": "VARCHAR",
        "voters_card": "VARCHAR",
        "passport": "VARCHAR",
        "next_of_kin_name": "VARCHAR",
        "next_of_kin_phone": "VARCHAR",
        "next_of_kin_address": "VARCHAR",
        "next_of_kin_relationship": "VARCHAR",
        "sponsorship_type": "VARCHAR",
        "cv_link": "VARCHAR",
        "company_letterhead_link": "VARCHAR",
        "company_letterhead_attachment_path": "VARCHAR",
    }

    with engine.begin() as connection:
        columns = connection.execute(text("PRAGMA table_info(bookings)")).fetchall()
        existing = {row[1] for row in columns}

        for column_name, column_type in required_columns.items():
            if column_name not in existing:
                connection.execute(
                    text(f"ALTER TABLE bookings ADD COLUMN {column_name} {column_type}")
                )

ensure_booking_columns()

UPLOAD_DIR = os.path.join(os.path.dirname(__file__), "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)

def save_upload(file: UploadFile, prefix: str) -> str:
    ext = os.path.splitext(file.filename or "")[1]
    filename = f"{prefix}_{uuid4().hex}{ext}"
    file_path = os.path.join(UPLOAD_DIR, filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    return file_path

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --- FastAPI app ---
app = FastAPI(title="Bookings App")

# --- CORS ---
frontend_url = os.environ.get("FRONTEND_URL", "*")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", frontend_url],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- API Routes FIRST ---
@app.post("/bookings/")
def create_booking(
    name: str = Form(...),
    phone: str = Form(...),
    email: str = Form(...),
    service: str = Form(...),
    date_value: str = Form(..., alias="date"),
    credential_type: str = Form(...),
    next_of_kin_name: str = Form(...),
    next_of_kin_phone: str = Form(...),
    next_of_kin_address: str = Form(...),
    next_of_kin_relationship: str = Form(...),
    sponsorship_type: str = Form("self"),
    notes: str = Form(""),
    credential_attachment: UploadFile = File(...),
    resume_attachment: UploadFile | None = File(None),
    company_letterhead_attachment: UploadFile | None = File(None),
    db: Session = Depends(get_db)
):
    try:
        parsed_date = date.fromisoformat(date_value)
    except ValueError:
        raise HTTPException(status_code=422, detail="Invalid date format. Use YYYY-MM-DD.")

    email_pattern = r"^[^\s@]+@[^\s@]+\.[^\s@]+$"
    phone_pattern = r"^\d{7,15}$"

    if re.fullmatch(email_pattern, email.strip()) is None:
        raise HTTPException(status_code=422, detail="Invalid email address format.")
    if re.fullmatch(phone_pattern, phone.strip()) is None:
        raise HTTPException(status_code=422, detail="Phone number must contain only digits.")
    if re.fullmatch(phone_pattern, next_of_kin_phone.strip()) is None:
        raise HTTPException(status_code=422, detail="Next of kin phone must contain only digits.")
    if parsed_date < date.today():
        raise HTTPException(status_code=422, detail="Prospective arrival date cannot be in the past.")

    requires_company_letterhead = (
        service == "Short Stay Accomodation" and sponsorship_type == "company"
    )
    requires_resume = (
        service != "Airport Cordination" and service != "Short Stay Accomodation"
    )
    if requires_resume and resume_attachment is None:
        raise HTTPException(
            status_code=422,
            detail="Resume attachment is required for the selected service."
        )
    if requires_company_letterhead and company_letterhead_attachment is None:
        raise HTTPException(
            status_code=422,
            detail="Company letterhead attachment is required for company-sponsored short stay."
        )

    credential_attachment_path = save_upload(credential_attachment, "credential")
    resume_attachment_path = None
    if resume_attachment is not None:
        resume_attachment_path = save_upload(resume_attachment, "resume")
    company_letterhead_attachment_path = None
    if company_letterhead_attachment is not None:
        company_letterhead_attachment_path = save_upload(
            company_letterhead_attachment,
            "company_letterhead"
        )

    db_booking = models.Booking(
        name=name,
        phone=phone,
        email=email,
        service=service,
        date=parsed_date,
        notes=notes,
        credential_type=credential_type,
        credential_attachment_path=credential_attachment_path,
        resume_attachment_path=resume_attachment_path,
        next_of_kin_name=next_of_kin_name,
        next_of_kin_phone=next_of_kin_phone,
        next_of_kin_address=next_of_kin_address,
        next_of_kin_relationship=next_of_kin_relationship,
        sponsorship_type=sponsorship_type,
        company_letterhead_attachment_path=company_letterhead_attachment_path,
    )
    db.add(db_booking)
    db.commit()
    db.refresh(db_booking)
    return db_booking

@app.get("/bookings/")
def get_bookings(db: Session = Depends(get_db)):
    return db.query(models.Booking).all()

# --- Serve React frontend LAST ---
frontend_dist = os.path.join(os.path.dirname(__file__), "../frontend/dist")
if os.path.exists(frontend_dist):
    app.mount("/assets", StaticFiles(directory=os.path.join(frontend_dist, "assets")), name="assets")

    @app.get("/", include_in_schema=False)
    def serve_index():
        return FileResponse(os.path.join(frontend_dist, "index.html"))

    @app.get("/{full_path:path}", include_in_schema=False)
    def serve_react(full_path: str):
        # Serve actual files from dist if they exist
        file_path = os.path.join(frontend_dist, full_path)
        if os.path.exists(file_path) and os.path.isfile(file_path):
            return FileResponse(file_path)
        # Otherwise serve index.html for SPA routing
        return FileResponse(os.path.join(frontend_dist, "index.html"))

