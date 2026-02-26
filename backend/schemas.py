from pydantic import BaseModel
# import models if needed using relative import
from . import models
from datetime import date, time

class BookingCreate(BaseModel):
    name: str
    email: str
    service: str
    date: date
    time: time
    notes: str
