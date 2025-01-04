from flask import Blueprint, request, jsonify
    from werkzeug.security import generate_password_hash, check_password_hash
    from models import UserProfile
    from app import db

    auth_bp = Blueprint('auth', __name__)

    @auth_bp.route('/register', methods=['POST'])
    def register():
      data = request.get_json()
      hashed_password = generate_password_hash(data['password'], method='sha256')
      new_user = UserProfile(name=data['name'], email=data['email'], password=hashed_password)
      db.session.add(new_user)
      db.session.commit()
      return jsonify({'message': 'User registered successfully!'}), 201

    @auth_bp.route('/login', methods=['POST'])
    def login():
      data = request.get_json()
      user = UserProfile.query.filter_by(email=data['email']).first()
      if not user or not check_password_hash(user.password, data['password']):
        return jsonify({'message': 'Invalid credentials!'}), 401
      return jsonify({'message': 'Login successful!'}), 200
