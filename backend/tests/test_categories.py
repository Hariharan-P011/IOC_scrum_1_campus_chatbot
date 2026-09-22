def test_get_categories(client):
    response = client.get("/api/categories")
    assert response.status_code == 200
    data = response.json()
    assert "categories" in data
    assert isinstance(data["categories"], list)
    assert len(data["categories"]) > 0


def test_get_category_entries(client):
    response = client.get("/api/categories/Departments")
    assert response.status_code == 200
    data = response.json()
    assert data["category"] == "Departments"
    assert isinstance(data["entries"], list)
    assert len(data["entries"]) > 0


def test_get_invalid_category(client):
    response = client.get("/api/categories/NonExistentCategory12345")
    assert response.status_code == 404


def test_category_entries_have_required_fields(client):
    response = client.get("/api/categories/Admission")
    assert response.status_code == 200
    entries = response.json()["entries"]
    for entry in entries:
        assert "id" in entry
        assert "question" in entry
        assert "answer" in entry
        assert "category" in entry
