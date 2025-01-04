```python
import time
from jobs import get_jobs  # Assuming this function fetches jobs from the job site

def automated_job_search():
    while True:
        # Fetch jobs based on user preferences
        jobs = get_jobs()  # This should return a list of jobs based on user preferences
        for job in jobs:
            # Automatically apply to each job
            apply_job(job)
        time.sleep(3600)  # Wait for an hour before searching again
```
