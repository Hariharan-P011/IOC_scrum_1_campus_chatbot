"""
Run this once from inside the backend/ folder (with venv activated) to
change the admin password stored in college_chatbot.db.

Usage:
    python change_password.py
"""
import getpass
from app.database.database import SessionLocal
from app.database.models import AdminUser
from app.core.security import hash_password

def main():
    username = input("Admin username to update [admin]: ").strip() or "admin"
    new_password = getpass.getpass("New password: ")
    confirm = getpass.getpass("Confirm new password: ")

    if new_password != confirm:
        print("Passwords do not match. Nothing changed.")
        return

    if len(new_password) < 6:
        print("Password should be at least 6 characters. Nothing changed.")
        return

    db = SessionLocal()
    try:
        user = db.query(AdminUser).filter(AdminUser.username == username).first()
        if not user:
            print(f"No admin user named '{username}' found.")
            return

        user.password_hash = hash_password(new_password)
        db.commit()
        print(f"Password updated for user '{username}'. You can now log in with the new password.")
    finally:
        db.close()

if __name__ == "__main__":
    main()
