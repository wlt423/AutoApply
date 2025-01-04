import React, { useState } from 'react';
    import axios from 'axios';

    function JobTypePreference({ userId, onPreferenceUpdate }) {
      const [jobType, setJobType] = useState('');

      const handleUpdate = async (e) => {
        e.preventDefault();
        try {
          await axios.put(`http://localhost:5000/profile/${userId}`, { job_type_preference: jobType });
          onPreferenceUpdate(); // Call the function to refresh the profile
          alert('Job type preference updated successfully!');
        } catch (error) {
          console.error('Error updating job type preference:', error);
          alert('Failed to update job type preference.');
        }
      };

      return (
        <form onSubmit={handleUpdate}>
          <select value={jobType} onChange={(e) => setJobType(e.target.value)} required>
            <option value="">Select Job Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
          <button type="submit">Set Preference</button>
        </form>
      );
    }

    export default JobTypePreference;
