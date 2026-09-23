from datetime import date
from typing import Optional
from app.schemas.canteen import CanteenMenuResponse, CanteenItem
from app.core.config import get_settings

settings = get_settings()

CANTEEN_UNAVAILABLE = (
    "The canteen information service is currently unavailable. "
    "Please contact the campus canteen or help desk for the latest menu and prices."
)

MOCK_MENU = CanteenMenuResponse(
    date=str(date.today()),
    source="mock",
    items=[
        CanteenItem(name="Idli (2 pcs)", category="Breakfast", price=20.0),
        CanteenItem(name="Dosa", category="Breakfast", price=40.0),
        CanteenItem(name="Pongal", category="Breakfast", price=30.0),
        CanteenItem(name="Vada (2 pcs)", category="Breakfast", price=25.0),
        CanteenItem(name="Rice Meals", category="Lunch", price=60.0),
        CanteenItem(name="Chapati (2 pcs)", category="Lunch", price=30.0),
        CanteenItem(name="Sambar Rice", category="Lunch", price=50.0),
        CanteenItem(name="Curd Rice", category="Lunch", price=40.0),
        CanteenItem(name="Tea", category="Beverages", price=10.0),
        CanteenItem(name="Coffee", category="Beverages", price=15.0),
        CanteenItem(name="Juice", category="Beverages", price=25.0),
    ]
)


def _format_menu(menu: CanteenMenuResponse) -> str:
    by_category: dict = {}
    for item in menu.items:
        by_category.setdefault(item.category, []).append(item)

    lines = [f"Today's Canteen Menu ({menu.date}):"]
    for cat, items in by_category.items():
        lines.append(f"\n{cat}:")
        for item in items:
            lines.append(f"  • {item.name} — ₹{item.price:.0f}")
    return "\n".join(lines)


async def get_menu_response():  # returns (str, bool)
    """Returns (formatted_answer, success)"""
    if settings.USE_MOCK_CANTEEN:
        return _format_menu(MOCK_MENU), True

    from app.integrations.canteen_client import fetch_today_menu
    menu = await fetch_today_menu()
    if menu:
        return _format_menu(menu), True
    return CANTEEN_UNAVAILABLE, False


CANTEEN_KEYWORDS = {
    "menu", "food", "canteen", "eat", "lunch", "breakfast", "dinner",
    "price", "cost", "dosa", "idli", "rice", "meals", "snack", "tea",
    "coffee", "today", "available", "items", "vada", "pongal", "chapati",
    "thali", "mess", "cafeteria", "tiffin", "drink", "beverage"
}


def is_canteen_question(question: str) -> bool:
    from app.utils.text_normalizer import meaningful_tokens
    tokens = set(meaningful_tokens(question))
    return bool(tokens & CANTEEN_KEYWORDS)
