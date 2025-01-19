import React from 'react';
import { useMediaQuery } from "@mui/material";
import ImageCarousel from '../components/ImageCarousel';
import "../styles.css";


function About() {
  const isMobile = useMediaQuery('(max-width:960px)');

  return (
    <div className={`section-container ${isMobile ? 'mobile' : ''}`}>
      <ImageCarousel/>
      <div className={`text-container ${isMobile ? 'mobile' : ''}`}>
        <h3 className='montserrat-medium'>About <span>Us</span></h3>
        <hr />
        <br />
        <p className='montserrat-regular'>
          Established in 2013, we are an 'A' grade HT <span className=''>electrical engineers & contractors</span> known for trust and technical excellence. Our experienced team delivers comprehensive electrical solutions for projects of any scale.
        </p>
        <div className="bullets-container">
          <div className="bullet-point montserrat-regular my-5 text-sm">Seamless project management with turnkey expertise.</div>
          <div className="bullet-point montserrat-regular my-5 text-sm">Client-centered pricing ensuring collaboration.</div>
          <div className="bullet-point montserrat-regular my-5 text-sm">Unwavering trust for project success.</div>
          <div className="bullet-point montserrat-regular my-5 text-sm">Technical excellence ensures optimal solutions.</div>
          <div className="bullet-point montserrat-regular my-5 text-sm">Proven success showcases track record.</div>
        </div>
        <div className="bottom-text montserrat-regular text-sm left-align">
          <h4>We are committed to fostering long-term partnerships, collaborating closely with our clients to translate their vision into a reality. With Electra Power Engineering as your partner, you can be confident that your electrical infrastructure is built to last, empowering your business for a brighter future.</h4>
        </div>
      </div>
    </div>
  );
}

export default About;