from .database import Base
from sqlalchemy import Column, Integer, String, Date

class Booking(Base):
    __tablename__ = "bookings"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    phone = Column(String)
    email = Column(String)
    service = Column(String)
    date = Column(Date)
    notes = Column(String)
    credential_type = Column(String)
    credential_attachment_path = Column(String)
    resume_attachment_path = Column(String)
    id_number = Column(String)
    nin = Column(String)
    voters_card = Column(String)
    passport = Column(String)
    next_of_kin_name = Column(String)
    next_of_kin_phone = Column(String)
    next_of_kin_address = Column(String)
    next_of_kin_relationship = Column(String)
    sponsorship_type = Column(String)
    cv_link = Column(String)
    company_letterhead_link = Column(String)
    company_letterhead_attachment_path = Column(String)

