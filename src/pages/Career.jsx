import React, { useEffect, useState } from "react";
import { getJobs } from "../api/Career";

function Career() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then(setJobs);
  }, []);

  if (jobs.length === 0) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <section className="section">
      <h1>Build Your Career With Us</h1>
      <p>Join our team and grow your skills.</p>

      <div className="cards">
        {jobs.map((job) => (
          <div className="card" key={job._id}>
            <h3>{job.title}</h3>
            <p>Job Type: {job.type}</p>
            <p>Location: {job.location}</p>
            <a
              href="mailto:careers@technova.com?subject=Job Application"
              className="btn"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Career;