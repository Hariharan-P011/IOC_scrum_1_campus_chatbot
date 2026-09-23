from pydantic import BaseModel
from typing import List, Optional


class CanteenItem(BaseModel):
    name: str
    category: str
    price: float


class CanteenMenuResponse(BaseModel):
    date: str
    items: List[CanteenItem]
    source: Optional[str] = "canteen_api"
