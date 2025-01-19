import { useState } from "react";
import JobAccordion from "./JobAccordion";
import ApplyForm from "./ApplyForm";

const JobApplication = () => {
  const [jobTitles, setJobTitles] = useState([]);

  const handleJobTitlesChange = (titles) => {
    setJobTitles(titles);
  };

  return (
    <div className="job-application-container">
      <div className="careers-left-column">
        <JobAccordion onJobTitlesChange={handleJobTitlesChange} />
      </div>
      <div className="careers-right-column">
        <ApplyForm jobTitles={jobTitles} />
      </div>
    </div>
  );
};

export default JobApplication;