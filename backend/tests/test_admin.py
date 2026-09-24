def test_admin_login_success(client):
    response = client.post("/api/admin/login", json={"username": "admin", "password": "admin123"})
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "bearer"


def test_admin_login_wrong_password(client):
    response = client.post("/api/admin/login", json={"username": "admin", "password": "wrongpassword"})
    assert response.status_code == 401


def test_admin_login_wrong_user(client):
    response = client.post("/api/admin/login", json={"username": "nobody", "password": "admin123"})
    assert response.status_code == 401


def test_unauthorized_access(client):
    response = client.get("/api/admin/knowledge-base")
    assert response.status_code == 401


def test_create_entry(client, auth_token):
    headers = {"Authorization": f"Bearer {auth_token}"}
    payload = {
        "category": "TestCategory",
        "question": "What is a test question?",
        "keywords": "test question sample",
        "answer": "This is a test answer."
    }
    response = client.post("/api/admin/knowledge-base", json=payload, headers=headers)
    assert response.status_code == 201
    data = response.json()
    assert data["question"] == "What is a test question?"
    assert data["category"] == "TestCategory"


def test_get_all_entries(client, auth_token):
    headers = {"Authorization": f"Bearer {auth_token}"}
    response = client.get("/api/admin/knowledge-base", headers=headers)
    assert response.status_code == 200
    assert isinstance(response.json(), list)


def test_update_entry(client, auth_token):
    headers = {"Authorization": f"Bearer {auth_token}"}
    create_resp = client.post(
        "/api/admin/knowledge-base",
        json={"category": "TestCat", "question": "Update me?", "answer": "Old answer"},
        headers=headers
    )
    entry_id = create_resp.json()["id"]
    update_resp = client.put(
        f"/api/admin/knowledge-base/{entry_id}",
        json={"answer": "Updated answer"},
        headers=headers
    )
    assert update_resp.status_code == 200
    assert update_resp.json()["answer"] == "Updated answer"


def test_delete_entry(client, auth_token):
    headers = {"Authorization": f"Bearer {auth_token}"}
    create_resp = client.post(
        "/api/admin/knowledge-base",
        json={"category": "TestCat", "question": "Delete me?", "answer": "To be deleted"},
        headers=headers
    )
    entry_id = create_resp.json()["id"]
    del_resp = client.delete(f"/api/admin/knowledge-base/{entry_id}", headers=headers)
    assert del_resp.status_code == 200
    get_resp = client.get(f"/api/admin/knowledge-base/{entry_id}", headers=headers)
    assert get_resp.status_code == 404


def test_create_entry_empty_question(client, auth_token):
    headers = {"Authorization": f"Bearer {auth_token}"}
    response = client.post(
        "/api/admin/knowledge-base",
        json={"category": "Test", "question": "  ", "answer": "Some answer"},
        headers=headers
    )
    assert response.status_code == 422


def test_create_entry_empty_answer(client, auth_token):
    headers = {"Authorization": f"Bearer {auth_token}"}
    response = client.post(
        "/api/admin/knowledge-base",
        json={"category": "Test", "question": "Valid question?", "answer": ""},
        headers=headers
    )
    assert response.status_code == 422
