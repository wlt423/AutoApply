```javascript
import React, { useState } from 'react';

function JobFilter({ onFilter }) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleFilter = (e) => {
    e.preventDefault();
    onFilter({ title, location });
  };

  return (
    <form onSubmit={handleFilter}>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Filter Jobs</button>
    </form>
  );
}

export default JobFilter;
```
