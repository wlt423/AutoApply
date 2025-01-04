```python
class FavoriteJob(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('user_profile.id'), nullable=False)
  job_title = db.Column(db.String(100), nullable=False)
  company = db.Column(db.String(100), nullable=False)
```
