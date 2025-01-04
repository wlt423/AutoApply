```javascript
import React, { useState } from 'react';
import axios from 'axios';

function ResumeUpload() {
  const [resume, setResume] = useState(null);

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('resume', resume);

    try {
      const response = await axios.post('http://localhost:5000/upload_resume', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error uploading resume:', error);
      alert('Failed to upload resume.');
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" onChange={handleResumeChange} required />
      <button type="submit">Upload Resume</button>
    </form>
  );
}

export default ResumeUpload;
```
