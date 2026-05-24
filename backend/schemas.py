from pydantic import BaseModel
from datetime import date
from typing import Optional


class BookingCreate(BaseModel):
    name: str
    phone: str
    email: str
    service: str
    date: date
    credential_type: str
    next_of_kin_name: str
    next_of_kin_phone: str
    next_of_kin_address: str
    next_of_kin_relationship: str
    sponsorship_type: Optional[str] = "self"
    notes: Optional[str] = ""
