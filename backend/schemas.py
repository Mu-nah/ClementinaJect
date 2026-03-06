from pydantic import BaseModel
# import models if needed using relative import
from . import models
from datetime import date
from typing import Optional

class BookingCreate(BaseModel):
    name: str
    email: str
    service: str
    date: date
    id_number: str
    nin: str
    voters_card: str
    passport: str
    next_of_kin_name: str
    next_of_kin_phone: str
    next_of_kin_relationship: str
    sponsorship_type: Optional[str] = None
    cv_link: Optional[str] = None
    company_letterhead_link: Optional[str] = None
    notes: str
