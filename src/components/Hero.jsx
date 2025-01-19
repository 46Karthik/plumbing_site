import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import divider from "../assets/img/divider2.png";

function Hero() {
  const isMobile = useMediaQuery('(max-width:960px)'); // md breakpoint is 960px in MUI

  return (
    <div 
      style={{
        padding: isMobile ? '69px 1rem 15px 1rem': '69px 1rem',
        marginLeft: isMobile ? '0rem' : '60px',  // Adjust left margin
        marginRight: isMobile ? '0rem' : '60px'  // Adjust right margin
      }} 
      className="bg-white"
    >
      <div 
        style={{
          maxWidth: '90rem',
          marginLeft: isMobile ? '0rem' : '0.5rem',  // Adjust left margin for this div
          marginRight: isMobile ? '1rem' : '3rem'  // Adjust right margin for this div
        }}
        className="mx-auto"
      >
        <div className={`flex ${isMobile ? 'flex-col items-start' : 'items-start'}`}>
          <div className={`mr-4 flex-shrink-0 ${isMobile ? 'transform rotate-90 mb-1 ml-4' : ''}`}>
            <img src={divider} alt="divider" style={{height:'33px', marginRight:'10px', paddingRight:'5px'}} />
          </div>
          <div className={`flex-grow ${isMobile ? 'pr-0' : 'pr-11'}`}>
            <h1 className={`mb-6 montserrat-medium ${isMobile ? 'text-xl' : 'text-3xl'}`}>
              <span style={{color:'#262626'}}>LOOK NO FURTHER FOR </span>
              <span style={{color:'#f06d1b'}}>YOUR ULTIMATE ELECTRICAL </span>
              <span style={{ fontSize: isMobile ? '1.25rem' : '2rem', color: '#1a73e8' }}>PROJECT SOLUTIONS!</span>
            </h1>
            <p className={`montserrat-regular text-darkgreytext ${isMobile ? 'text-sm' : 'text-base mr-8 pr-8'}`}>
            Our commitment to electrical expertise extends beyond mere service—it's a pledge.  We're dedicated to shaping the world with every connection, driving progress forward. With us, you're not simply a customer; you're a valued partner in illuminating the path towards a powerful future.

            </p>
          </div>
          {!isMobile && (
            <Link to="/services-design-consulting">
              <button className="btn btn-md rounded-full whitespace-nowrap ml-7 bg-[#F2F2F2]">
                <h3 className="montserrat-medium px-3 text-lg">OUR SERVICES →</h3>
              </button>
            </Link>
          )}
        </div>
        {isMobile && (
          <Link to="/services-design-consulting">
            <button className="btn btn-md rounded-full whitespace-nowrap mt-8 mb-1 bg-[#F2F2F2]">
              <h3 className="montserrat-medium px-3 text-sm">OUR SERVICES →</h3>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Hero;
