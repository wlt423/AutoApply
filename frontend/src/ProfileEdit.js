import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    function ProfileEdit({ userId, onProfileUpdate }) {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');

      useEffect(() => {
        const fetchProfile = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/profile/${userId}`);
            setName(response.data.name);
            setEmail(response.data.email);
          } catch (error) {
            console.error('Error fetching profile:', error);
          }
        };

        fetchProfile();
      }, [userId]);

      const handleUpdate = async (e) => {
        e.preventDefault();
        try {
          await axios.put(`http://localhost:5000/profile/${userId}`, { name, email });
          onProfileUpdate(); // Call the function to refresh the profile
          alert('Profile updated successfully!');
        } catch (error) {
          console.error('Error updating profile:', error);
          alert('Failed to update profile.');
        }
      };

      return (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Update Profile</button>
        </form>
      );
    }

    export default ProfileEdit;
