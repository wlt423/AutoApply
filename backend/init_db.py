from app import db
  from models import UserProfile, JobApplication

  db.create_all()
  print("Database initialized!")
