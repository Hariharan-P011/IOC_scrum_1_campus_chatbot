def test_chat_valid_question(client):
    response = client.post("/api/chatbot/query", json={"question": "What documents are required for admission?"})
    assert response.status_code == 200
    data = response.json()
    assert "answer" in data
    assert "confidence" in data
    assert "matched" in data
    assert data["matched"] is True
    assert data["confidence"] > 0.5


def test_chat_unmatched_question(client):
    response = client.post("/api/chatbot/query", json={"question": "xyzzy foobar nonsense question"})
    assert response.status_code == 200
    data = response.json()
    assert data["matched"] is False
    assert data["source"] == "fallback"


def test_chat_empty_question(client):
    response = client.post("/api/chatbot/query", json={"question": "   "})
    assert response.status_code == 422


def test_chat_missing_question(client):
    response = client.post("/api/chatbot/query", json={})
    assert response.status_code == 422


def test_chat_canteen_question(client):
    response = client.post("/api/chatbot/query", json={"question": "What is today's canteen menu?"})
    assert response.status_code == 200
    data = response.json()
    assert data["category"] == "Canteen"
    assert data["matched"] is True


def test_chat_confidence_threshold(client):
    response = client.post("/api/chatbot/query", json={"question": "admission office location"})
    assert response.status_code == 200
    data = response.json()
    assert "confidence" in data
    assert isinstance(data["confidence"], float)
