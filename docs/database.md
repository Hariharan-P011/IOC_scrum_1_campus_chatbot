# Database Design — MIT Campus Chatbot

## Tables

### knowledge_base
| Column        | Type    | Description                        |
|---------------|---------|------------------------------------|
| id            | INTEGER | Primary key, auto-increment        |
| category      | VARCHAR | e.g. Departments, Admission        |
| question      | TEXT    | The question text                  |
| keywords      | TEXT    | Comma-separated matching keywords  |
| answer        | TEXT    | The answer text                    |
| metadata_json | TEXT    | Optional JSON metadata             |
| created_at    | DATETIME| Auto-set on creation               |
| updated_at    | DATETIME| Auto-updated on modification       |

### admin_users
| Column        | Type    | Description                        |
|---------------|---------|------------------------------------|
| id            | INTEGER | Primary key                        |
| username      | VARCHAR | Unique login name                  |
| password_hash | VARCHAR | bcrypt hashed password             |
| role          | VARCHAR | "admin"                            |
| created_at    | DATETIME| Auto-set on creation               |

## Supported Categories
- Departments
- Required Documents
- Admission
- Offices
- Facilities
- Canteen
- Hostel
- Transport
- Fees
- Contact
- General
