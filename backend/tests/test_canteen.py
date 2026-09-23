from unittest.mock import patch, AsyncMock
from app.services.canteen_service import is_canteen_question, CANTEEN_UNAVAILABLE


def test_canteen_menu_endpoint(client):
    response = client.get("/api/canteen/menu/today")
    assert response.status_code == 200
    data = response.json()
    assert "available" in data


def test_canteen_menu_mock_available(client):
    response = client.get("/api/canteen/menu/today")
    assert response.status_code == 200
    data = response.json()
    assert data["available"] is True
    assert "menu" in data["message"].lower() or "canteen" in data["message"].lower()


def test_canteen_api_failure_graceful(client):
    with patch("app.services.canteen_service.settings") as mock_settings:
        mock_settings.USE_MOCK_CANTEEN = False
        with patch("app.integrations.canteen_client.fetch_today_menu", new_callable=AsyncMock) as mock_fetch:
            mock_fetch.return_value = None
            response = client.post("/api/chatbot/query", json={"question": "What food is available today?"})
            assert response.status_code == 200


def test_is_canteen_question():
    assert is_canteen_question("What is today's menu?") is True
    assert is_canteen_question("How much is dosa?") is True
    assert is_canteen_question("What food is available?") is True
    assert is_canteen_question("Where is the admission office?") is False
    assert is_canteen_question("What documents do I need?") is False


def test_canteen_chatbot_routing(client):
    response = client.post("/api/chatbot/query", json={"question": "What is the price of idli?"})
    assert response.status_code == 200
    data = response.json()
    assert data["category"] == "Canteen"
