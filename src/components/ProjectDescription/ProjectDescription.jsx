import React from 'react';
import "./ProjectDescription.css";

const ProjectDescription = ({ description_one, description_two }) => {

    return (
        <div className="project-description flex ">
            <div className="rotate-inverse text-center text-xl uppercase montserrat-regular tracking-wider px-2 py-5  text text-white ">
   description
            </div>
            <div className=" project-description-text text-lg montserrat-regular flex flex-col justify-center  px-14">
                <p className="mb-6">
                    {description_one}
                </p>
                <p>
                    {description_two}
                </p>
            </div>
        </div>
    );
}

export default ProjectDescription;
