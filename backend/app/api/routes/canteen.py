from fastapi import APIRouter
from app.schemas.canteen import CanteenMenuResponse
from app.services.canteen_service import get_menu_response, CANTEEN_UNAVAILABLE
from app.schemas.chat import ChatResponse

router = APIRouter(prefix="/api/canteen", tags=["Canteen"])


@router.get("/menu/today", summary="Get today's canteen menu")
async def get_today_menu():
    answer, success = await get_menu_response()
    if not success:
        return {"available": False, "message": CANTEEN_UNAVAILABLE}
    return {"available": True, "message": answer}


@router.get("/menu", summary="Get canteen menu")
async def get_menu():
    return await get_today_menu()
