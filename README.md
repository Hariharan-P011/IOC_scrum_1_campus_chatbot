# MIT Anna University Campus & Admission Chatbot

A full-stack web chatbot for **Madras Institute of Technology (MIT), Anna University, Chennai** that helps prospective students, new students, parents, and campus visitors find information about departments, admission, required documents, facilities, canteen, hostel, transport, and more.

---

## Problem Statement

New students, prospective students, parents, and campus visitors often struggle to find department locations, administrative office locations, required admission documents, campus facilities, canteen information, and other frequently requested campus information — resulting in high walk-in and phone query volumes at the admission office.

---

## Features

- 💬 Floating chat widget embeddable on any college website
- 📱 Mobile-responsive UI accessible via QR code scan
- 🔍 Free-text question answering with confidence scoring
- 📂 Category-based quick-reply browsing (Departments, Admission, Facilities, etc.)
- 🍽️ Live canteen menu integration (with mock fallback)
- 🔐 Admin interface for managing Q&A without touching code
- 📊 REST API with Swagger documentation
- 🧪 Full test suite with Pytest

---

## Architecture

```
USER (Browser / Mobile)
        │
        ▼
   React + Vite
        │ REST API
        ▼
   Python + FastAPI
        │
   ChatbotService
   ┌────────────────────────┐
   │ KnowledgeBaseEngine    │──► Repository ──► SQLAlchemy ──► SQLite
   │ CanteenService         │──► CanteenClient ──► Smart Canteen API
   └────────────────────────┘
        │
   Admin API (JWT) ──► SQLite
```

---

## Tech Stack

| Layer     | Technology                              |
|-----------|-----------------------------------------|
| Frontend  | React 18, Vite, JavaScript, JSX, CSS    |
| Backend   | Python, FastAPI, Pydantic, SQLAlchemy   |
| Database  | SQLite                                  |
| Auth      | JWT (python-jose), bcrypt (passlib)     |
| HTTP      | httpx (canteen client), axios (frontend)|
| Testing   | Pytest, FastAPI TestClient              |

---

## Folder Structure

```
ioc_final/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   └── security.py
│   │   ├── database/
│   │   │   ├── database.py
│   │   │   └── models.py
│   │   ├── schemas/
│   │   │   ├── chat.py
│   │   │   ├── category.py
│   │   │   ├── knowledge_base.py
│   │   │   ├── admin.py
│   │   │   └── canteen.py
│   │   ├── api/routes/
│   │   │   ├── chat.py
│   │   │   ├── categories.py
│   │   │   ├── admin.py
│   │   │   └── canteen.py
│   │   ├── services/
│   │   │   ├── chatbot_service.py
│   │   │   ├── chatbot_engine.py
│   │   │   ├── knowledge_service.py
│   │   │   ├── category_service.py
│   │   │   ├── canteen_service.py
│   │   │   └── auth_service.py
│   │   ├── repositories/
│   │   │   ├── knowledge_repository.py
│   │   │   └── category_repository.py
│   │   ├── integrations/
│   │   │   └── canteen_client.py
│   │   ├── utils/
│   │   │   └── text_normalizer.py
│   │   └── seed/
│   │       └── seed_data.py
│   ├── tests/
│   │   ├── conftest.py
│   │   ├── test_chat.py
│   │   ├── test_categories.py
│   │   ├── test_admin.py
│   │   └── test_canteen.py
│   ├── requirements.txt
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatWidget.jsx
│   │   │   ├── ChatHeader.jsx
│   │   │   ├── MessageList.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   ├── ChatInput.jsx
│   │   │   ├── QuickReplies.jsx
│   │   │   ├── LoadingIndicator.jsx
│   │   │   ├── ErrorMessage.jsx
│   │   │   └── QRCodeDisplay.jsx
│   │   ├── pages/
│   │   │   ├── ChatPage.jsx
│   │   │   └── AdminPage.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── chatService.js
│   │   │   ├── categoryService.js
│   │   │   └── adminService.js
│   │   ├── hooks/
│   │   │   └── useChat.js
│   │   ├── utils/
│   │   │   └── constants.js
│   │   ├── styles/
│   │   │   ├── chat.css
│   │   │   ├── responsive.css
│   │   │   └── admin.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── .env.example
└── docs/
    ├── api.md
    ├── database.md
    └── architecture.md
```

---

## Database Design

### knowledge_base
| Column        | Type     | Notes                          |
|---------------|----------|--------------------------------|
| id            | INTEGER  | Primary key                    |
| category      | VARCHAR  | Departments, Admission, etc.   |
| question      | TEXT     | Question text                  |
| keywords      | TEXT     | Space/comma separated keywords |
| answer        | TEXT     | Answer text                    |
| metadata_json | TEXT     | Optional JSON                  |
| created_at    | DATETIME | Auto                           |
| updated_at    | DATETIME | Auto                           |

### admin_users
| Column        | Type     | Notes              |
|---------------|----------|--------------------|
| id            | INTEGER  | Primary key        |
| username      | VARCHAR  | Unique             |
| password_hash | VARCHAR  | bcrypt             |
| role          | VARCHAR  | "admin"            |
| created_at    | DATETIME | Auto               |

---

## API List

| Method | Endpoint                          | Auth  | Description                  |
|--------|-----------------------------------|-------|------------------------------|
| POST   | /api/chatbot/query                | No    | Submit question to chatbot   |
| GET    | /api/categories                   | No    | List all categories          |
| GET    | /api/categories/{category}        | No    | Get entries for category     |
| POST   | /api/admin/login                  | No    | Admin login → JWT token      |
| GET    | /api/admin/knowledge-base         | JWT   | List all KB entries          |
| GET    | /api/admin/knowledge-base/{id}    | JWT   | Get single KB entry          |
| POST   | /api/admin/knowledge-base         | JWT   | Create KB entry              |
| PUT    | /api/admin/knowledge-base/{id}    | JWT   | Update KB entry              |
| DELETE | /api/admin/knowledge-base/{id}    | JWT   | Delete KB entry              |
| GET    | /api/canteen/menu/today           | No    | Today's canteen menu         |
| GET    | /api/canteen/menu                 | No    | Canteen menu                 |

---

## Setup Instructions

### Prerequisites
- Python 3.11+
- Node.js 18+
- npm

---

### Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (Linux/macOS)
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Copy environment file
copy .env.example .env        # Windows
cp .env.example .env          # Linux/macOS

# Start backend (database is auto-initialized and seeded on first run)
uvicorn app.main:app --reload
```

Backend runs at: http://localhost:8000

---

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Copy environment file
copy .env.example .env        # Windows
cp .env.example .env          # Linux/macOS

# Start frontend
npm run dev
```

Frontend runs at: http://localhost:5173

Admin interface: http://localhost:5173/admin

---

### Environment Configuration

**backend/.env**
```
DATABASE_URL=sqlite:///./college_chatbot.db
SECRET_KEY=change-this-secret-key-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
CONFIDENCE_THRESHOLD=0.30
CANTEEN_API_URL=http://localhost:8001
FRONTEND_URL=http://localhost:5173
USE_MOCK_CANTEEN=true
```

**frontend/.env**
```
VITE_API_BASE_URL=http://localhost:8000
VITE_CHATBOT_PUBLIC_URL=http://localhost:5173
```

---

### Running Tests

```bash
cd backend
pytest tests/ -v
```

---

### API Documentation (Swagger)

Open in browser after starting backend:
```
http://localhost:8000/docs
```

---

## Default Admin Credentials

```
Username: admin
Password: admin123
```

> ⚠️ Change the default password immediately in any non-development environment.

---

## Canteen Integration

- `USE_MOCK_CANTEEN=true` — uses built-in mock menu (default for development)
- `USE_MOCK_CANTEEN=false` — calls real Smart Canteen API at `CANTEEN_API_URL`
- If the real API is unavailable, the chatbot returns a graceful fallback message instead of crashing

---

## QR Code Usage

1. Start the frontend
2. Open http://localhost:5173
3. The QR code on the page encodes `VITE_CHATBOT_PUBLIC_URL`
4. Scan with a mobile device to open the chatbot directly
5. For production, set `VITE_CHATBOT_PUBLIC_URL` to your public domain

---

## Example curl Requests

```bash
# Ask a question
curl -X POST http://localhost:8000/api/chatbot/query \
  -H "Content-Type: application/json" \
  -d '{"question": "Where is the admission office?"}'

# Get categories
curl http://localhost:8000/api/categories

# Admin login
curl -X POST http://localhost:8000/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'

# Create KB entry (replace TOKEN)
curl -X POST http://localhost:8000/api/admin/knowledge-base \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{"category":"Admission","question":"What is the fee?","answer":"Please contact the accounts office."}'
```

---

## Acceptance Criteria Traceability

| User Story          | Requirement              | Module                    | API                          | Test              |
|---------------------|--------------------------|---------------------------|------------------------------|-------------------|
| SCRUM01-F001-UI-001 | Chat widget              | ChatWidget.jsx            | POST /api/chatbot/query      | test_chat.py      |
| SCRUM01-F001-UI-002 | QR code                  | QRCodeDisplay.jsx         | —                            | —                 |
| SCRUM01-F001-BE-001 | Chat query API           | chatbot_service.py        | POST /api/chatbot/query      | test_chat.py      |
| SCRUM01-F001-BE-002 | Admin CRUD               | category_service.py       | CRUD /api/admin/knowledge-base| test_admin.py    |
| SCRUM01-F001-DB-001 | DB schema                | models.py                 | —                            | —                 |
| SCRUM01-F001-INT-001| Canteen integration      | canteen_service.py        | GET /api/canteen/menu        | test_canteen.py   |
| SCRUM01-F002-UI-001 | Category quick replies   | QuickReplies.jsx          | GET /api/categories          | test_categories.py|
| SCRUM01-F002-BE-001 | Category API             | category_service.py       | GET /api/categories          | test_categories.py|

---

## Future Improvements

- Tamil language support
- Voice input / output
- Semantic search with embeddings (EmbeddingChatbotEngine)
- RAG / LLM integration (LLMChatbotEngine / RAGChatbotEngine)
- Conversation history & analytics
- Campus map / navigation integration
- PDF/document ingestion into knowledge base
- "Was this helpful?" feedback buttons
- Role-based admin (super-admin, department-admin)
- Frequently asked questions dashboard
