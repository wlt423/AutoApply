import React, { useEffect, useState } from 'react';
    import axios from 'axios';

    function ApplicationStatus() {
      const [applications, setApplications] = useState([]);

      const fetchApplications = async () => {
        try {
          const response = await axios.get('http://localhost:5000/applications');
          setApplications(response.data);
        } catch (error) {
          console.error('Error fetching applications:', error);
        }
      };

      useEffect(() => {
        fetchApplications();
      }, []);

      return (
        <div>
          <h2>Application Status</h2>
          <ul>
            {applications.map((app, index) => (
              <li key={index}>
                {app.job_title} at {app.company} - Status: {app.status}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default ApplicationStatus;
