# MIT Anna University Campus Chatbot — API Reference

## Base URL
```
http://localhost:8000
```

---

## Public APIs

### POST /api/chatbot/query
Submit a question to the chatbot.

**Request:**
```json
{ "question": "Where is the admission office?" }
```

**Response:**
```json
{
  "answer": "The Admission Office...",
  "confidence": 0.87,
  "matched": true,
  "category": "Admission",
  "source": "knowledge_base"
}
```

**Fallback (no match):**
```json
{
  "answer": "I couldn't find a reliable answer...",
  "confidence": 0.18,
  "matched": false,
  "category": null,
  "source": "fallback"
}
```

---

### GET /api/categories
Returns all available categories.

**Response:**
```json
{ "categories": ["Departments", "Admission", "Required Documents", ...] }
```

---

### GET /api/categories/{category}
Returns all entries for a specific category.

**Response:**
```json
{
  "category": "Departments",
  "entries": [
    { "id": 1, "category": "Departments", "question": "...", "answer": "...", ... }
  ]
}
```

---

## Admin APIs (JWT Required)

### POST /api/admin/login
```json
{ "username": "admin", "password": "admin123" }
```
Returns: `{ "access_token": "...", "token_type": "bearer" }`

All subsequent admin requests require:
```
Authorization: Bearer <token>
```

### GET /api/admin/knowledge-base
List all entries.

### GET /api/admin/knowledge-base/{id}
Get single entry.

### POST /api/admin/knowledge-base
Create entry.
```json
{ "category": "Admission", "question": "...", "keywords": "...", "answer": "..." }
```

### PUT /api/admin/knowledge-base/{id}
Update entry (partial update supported).

### DELETE /api/admin/knowledge-base/{id}
Delete entry.

---

## Canteen APIs

### GET /api/canteen/menu/today
Returns today's canteen menu (mock or live).

### GET /api/canteen/menu
Alias for today's menu.

---

## Error Codes

| Code | Meaning |
|------|---------|
| 200  | Success |
| 201  | Created |
| 401  | Unauthorized |
| 403  | Forbidden |
| 404  | Not Found |
| 422  | Validation Error |
| 500  | Internal Server Error |
