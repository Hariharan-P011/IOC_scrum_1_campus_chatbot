from datetime import date
from typing import Optional
import httpx
from app.schemas.canteen import CanteenMenuResponse
from app.core.config import get_settings

settings = get_settings()


async def fetch_today_menu() -> Optional[CanteenMenuResponse]:
    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            response = await client.get(f"{settings.CANTEEN_API_URL}/api/canteen/menu/today")
            response.raise_for_status()
            data = response.json()
            return CanteenMenuResponse(**data)
    except Exception:
        return None


async def fetch_full_menu() -> Optional[CanteenMenuResponse]:
    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            response = await client.get(f"{settings.CANTEEN_API_URL}/api/canteen/menu")
            response.raise_for_status()
            data = response.json()
            return CanteenMenuResponse(**data)
    except Exception:
        return None
