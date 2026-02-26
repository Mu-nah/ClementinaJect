from .database import Base  # instead of 'from database import Base'
from sqlalchemy import Column, Integer, String, Date  # your existing imports
from datetime import date, time

class Booking(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    service = Column(String)
    date = Column(Date)
    time = Column(Time)
    notes = Column(String)
