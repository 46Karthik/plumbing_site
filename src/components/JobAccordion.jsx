import { useState, useEffect } from "react";
import axios from "axios";

const JobAccordion = ({ onJobTitlesChange }) => {
  const [jobDetails, setJobDetails] = useState([]);  
  const [activeIndex, setActiveIndex] = useState(0);

  // Fetch jobs from API and filter by 'Open' status
  const fetchJobDetails = async () => {
    try {
        const response = await axios.get("https://o6ahie1f44.execute-api.ap-south-1.amazonaws.com/v1/getJobs");
        if (response.status === 200) {
            // Filter jobs with status "Open"
            const openJobs = response.data.data.filter(job => job.job_status === "Open");
            
            // Sort by job_priority and then by updated_at (recent to least recent)
            openJobs.sort((a, b) => {
                // Sort by job_priority (High first, then Normal)
                if (a.job_priority === "High" && b.job_priority !== "High") return -1;
                if (a.job_priority !== "High" && b.job_priority === "High") return 1;
                
                // Sort by updated_at (most recent to least recent)
                const dateA = new Date(a.updated_at);
                const dateB = new Date(b.updated_at);
                return dateB - dateA; // Descending order
            });

            setJobDetails(openJobs);

            // Send job titles to parent component via prop function
            const titles = openJobs.map(job => job.title);
            onJobTitlesChange(titles);
        } else {
            console.error("Error fetching jobs:", response.status);
        }
    } catch (error) {
        console.error("Error fetching jobs:", error);
    }
};


  useEffect(() => {
    fetchJobDetails();
  }, []);


  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  return (
    <div className="accordion">
      {jobDetails.map((job, index) => (
        <div key={index}>
          <button
            className="accordion-button flex justify-between items-center py-2 w-full text-left bg-gray-100 rounded-lg mb-2"
            onClick={() => handleClick(index)}
          >
            <span className="montserrat-bold">{job.title}</span>
            <span
              className="rounded-full border border-gray-500 p-2 w-6 h-6 flex items-center justify-center"
            >
              {activeIndex === index ? "-" : "+"}
            </span>
          </button>
          {activeIndex === index && (
            <div className="accordion-content ">
              <h4 className="montserrat-regular py-3">{job.experience} | {job.location}</h4>
              <p className="montserrat-regular py-3"><strong>Position Status: </strong>{job.job_status}</p>
              <p className="montserrat-regular py-3"><strong>Responsibilities:</strong></p>
              <ul className="py-2 list-disc mx-5">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="montserrat-regular py-1">{resp}</li>
                ))}
              </ul>
              <p className="montserrat-regular py-3"><strong>Skillsets Required:</strong></p>
              <ul className="py-2 list-disc mx-5">
                {job.skillsets.map((skill, idx) => (
                  <li key={idx} className="montserrat-regular py-1">{skill}</li>
                ))}
              </ul>
              <p className="montserrat-regular py-3"><strong>Requirements:</strong> {job.requirements}</p>
              <p className="montserrat-regular py-3"><strong>Education:</strong> {job.education}</p>
            </div>
          )}
          {index < jobDetails.length - 1 && (
            <hr className="border-t-1 my-4 careers-divider" />
          )}
        </div>
      ))}
    </div>
  );
};

export default JobAccordion;