import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles.css';
import image1 from '../assets/img/teamimg1_webimage.webp'; // Replace with actual image path
import image2 from '../assets/img/teamimg2_webimage.webp'; // Replace with actual image path
import expicon from '../assets/img/expicon.png'; // Replace with actual image

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const OurTeam = () => {
  return (
    <div className="our-team-container">
      <h1 className="our-team-title montserrat-regular">The Driving Force Behind <span className="our-team-highlight">Electra Power Engineering</span></h1>
      <p className="our-team-description montserrat-regular">
        Our team, our most valuable pillar, is composed of passionate professionals dedicated to delivering 
        outstanding electrical solutions. Driven by a desire for global positive impact, we're committed to 
        sustainable development in India and beyond. Our diverse backgrounds empower us to innovate and 
        tackle challenges with varied perspectives.
      </p>
      <p className="our-team-description montserrat-regular">
        We bring together top minds in electrical engineering, design, and technology, fostering a collaborative 
        environment that drives innovation and excellence in every project.
      </p>
      <div className="our-team-experience montserrat-regular">
        <img src={expicon} alt="" />
        <span>12+ Years Experience</span>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={1500}
        showDots={false}
        arrows={false}
        className="our-team-carousel"
      >
        <div>
          <img src={image1} alt="A group of jubilant electrical site engineers and technicians standing together, holding their helmets in celebration after successfully completing a project or task." className="carousel-image"/>
        </div>
        <div>
          <img src={image2} alt="A group of electrapower electrical site engineers and technicians standing in front of a construction site, their shadows cast forward onto the ground." className="carousel-image"/>
        </div>
        {/* Add more images as needed */}
      </Carousel>
    </div>
  );
};

export default OurTeam;
