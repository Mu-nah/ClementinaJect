from datetime import date
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from database import db
import cloudinary
import cloudinary.uploader
import os
import re

cloudinary.config(
    cloud_name=os.environ.get("CLOUDINARY_CLOUD_NAME"),
    api_key=os.environ.get("CLOUDINARY_API_KEY"),
    api_secret=os.environ.get("CLOUDINARY_API_SECRET"),
)

def upload_file(file: UploadFile, folder: str) -> str:
    result = cloudinary.uploader.upload(
        file.file,
        folder=f"everythingabuja/{folder}",
        resource_type="auto",
    )
    return result["secure_url"]

app = FastAPI(title="Everything Abuja Bookings")

frontend_url = os.environ.get("FRONTEND_URL", "*")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", frontend_url],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health", include_in_schema=False)
async def health():
    return {"status": "ok"}


@app.post("/bookings/")
async def create_booking(
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
):
    try:
        parsed_date = date.fromisoformat(date_value)
    except ValueError:
        raise HTTPException(status_code=422, detail="Invalid date format. Use YYYY-MM-DD.")

    if not re.fullmatch(r"^[^\s@]+@[^\s@]+\.[^\s@]+$", email.strip()):
        raise HTTPException(status_code=422, detail="Invalid email address.")
    if not re.fullmatch(r"^\d{7,15}$", phone.strip()):
        raise HTTPException(status_code=422, detail="Phone must contain only digits.")
    if not re.fullmatch(r"^\d{7,15}$", next_of_kin_phone.strip()):
        raise HTTPException(status_code=422, detail="Next of kin phone must contain only digits.")
    if parsed_date < date.today():
        raise HTTPException(status_code=422, detail="Arrival date cannot be in the past.")

    requires_resume = service not in ("Airport Cordination", "Short Stay Accomodation")
    requires_letterhead = service == "Short Stay Accomodation" and sponsorship_type == "company"

    if requires_resume and resume_attachment is None:
        raise HTTPException(status_code=422, detail="Resume attachment is required for this service.")
    if requires_letterhead and company_letterhead_attachment is None:
        raise HTTPException(status_code=422, detail="Company letterhead is required for company-sponsored short stay.")

    credential_path = upload_file(credential_attachment, "credentials")
    resume_path = upload_file(resume_attachment, "resumes") if resume_attachment else None
    letterhead_path = upload_file(company_letterhead_attachment, "letterheads") if company_letterhead_attachment else None

    booking = {
        "name": name,
        "phone": phone,
        "email": email,
        "service": service,
        "date": date_value,
        "notes": notes,
        "credential_type": credential_type,
        "credential_attachment_path": credential_path,
        "resume_attachment_path": resume_path,
        "next_of_kin_name": next_of_kin_name,
        "next_of_kin_phone": next_of_kin_phone,
        "next_of_kin_address": next_of_kin_address,
        "next_of_kin_relationship": next_of_kin_relationship,
        "sponsorship_type": sponsorship_type,
        "company_letterhead_attachment_path": letterhead_path,
    }

    result = await db.bookings.insert_one(booking)
    booking["_id"] = str(result.inserted_id)
    return booking


@app.get("/bookings/")
async def get_bookings():
    bookings = []
    async for booking in db.bookings.find():
        booking["_id"] = str(booking["_id"])
        bookings.append(booking)
    return bookings


# Serve React frontend (production)
frontend_dist = os.path.join(os.path.dirname(__file__), "../frontend/dist")
if os.path.exists(frontend_dist):
    app.mount("/assets", StaticFiles(directory=os.path.join(frontend_dist, "assets")), name="assets")

    @app.get("/", include_in_schema=False)
    def serve_index():
        return FileResponse(os.path.join(frontend_dist, "index.html"))

    @app.get("/{full_path:path}", include_in_schema=False)
    def serve_react(full_path: str):
        file_path = os.path.join(frontend_dist, full_path)
        if os.path.exists(file_path) and os.path.isfile(file_path):
            return FileResponse(file_path)
        return FileResponse(os.path.join(frontend_dist, "index.html"))
