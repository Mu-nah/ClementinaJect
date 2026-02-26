from pydantic import BaseModel
from datetime import date, time

class BookingCreate(BaseModel):
    name: str
    email: str
    service: str
    date: date
    time: time
    notes: str