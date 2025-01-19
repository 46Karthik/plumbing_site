import React from 'react';
import "./ProjectTestimonial.css"
import logo_rect from "../../assets/img/logo/testi_logo_large.svg";
import logo_rect_mb from "../../assets/img/logo/mobile_logo_testi.svg";

const ProjectTestimonial = ({ image, alt, title, info }) => {
    return (
        <div className="project-testimonial flex  items-center ">
            <svg className="blue-rectangle" width="94" height="4" viewBox="0 0 94 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="4" height="94" transform="rotate(-90 0 4)" fill="#3F9CDA" />
            </svg>

            <span className=" rotate-inverse   text-xl uppercase montserrat-regular tracking-wider px-2 text-center  text-white ">
                testimonials
            </span>
            <div className=" project-testimonial-info text-lg montserrat-regular p-10  bg-white  shadow-outline">
                <div className="project-testimonial-logo flex  px-6">
              
                    <img src={image} alt = {alt} className="z-20 h-[154px] rounded-l-[15px] "

                    />


                    <img src={logo_rect} alt="Electrapower Engineering Logo" className=" z-2 -ml-[10px]" />
                    <img src={logo_rect_mb} alt="Electrapower Engineering Logo" className=" z-2 -ml-[10px] "  />
                </div>
                <div className="project-testimonial-text ">
                    <h4 className="text-orangetext text-sm ml-6 mb-8">{title}</h4>
                    <p className="text-base tracking-[.01em] px-10">
                        {`"${info}"`}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectTestimonial;
