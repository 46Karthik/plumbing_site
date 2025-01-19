import { useState, useEffect } from 'react';
import axios from 'axios';
import "./ProjectHeader.css";
import projectHeaderImage from "../../assets/img/project-header-webimage.webp";

const ProjectHeader = () => {
  // State to store the satisfied client value
  const [clientValue, setClientValue] = useState("");

  // Fetch data from API when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://i9qn12cz4c.execute-api.ap-south-1.amazonaws.com/v1/getProjectNumbers');
        const data = response.data.data;

        // Find the object with page "portfolio-projects"
        const clientData = data.find(item => item.page === "portfolio-projects");

        // If found, set the client value
        if (clientData) {
          setClientValue(clientData.value);
        }
      } catch (error) {
        console.error("Error fetching client data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="project-header">
      <img 
        src={projectHeaderImage} 
        alt="Modern commercial building with extensive glass facade reflecting a vibrant sunset sky" 
        className="project-header-image" 
      />
      <div className="mt-12 mb-4 flex flex-col">
        <div className="flex items-center justify-between h-fix">
          <h2 className="text-[38px] -tracking-[0.03em]">
            Powerfully placed <span>success </span><span>Stories</span>
          </h2>
          <div className="project-header-span flex items-center gap-x-2">
            <span className='circle circle-1'>&nbsp;</span>
            <span className='circle circle-2'>&nbsp;</span>
            {clientValue && (
              <>
                <span className='span-3'>{clientValue.split(" ")[0]}</span>
                <span className='span-4'>{clientValue.split(" ").slice(1).join(" ")}</span>
                <span>{clientValue}</span>
              </>
            )}
          </div>
        </div>
        <p className="project-header-title border text-base tracking-[0.2em] text-center rounded-[13px] mt-10">
          ELECTRA POWER ENGINEERING
        </p>
      </div>
    </div>
  );
};

export default ProjectHeader;
