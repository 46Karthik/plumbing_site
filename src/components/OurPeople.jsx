import React, { useEffect, useState } from 'react';
import '../styles.css';
import peopleImage from '../assets/img/peopleimg_webimage.webp'; // Replace with the correct path

const OurPeople = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    // Check the initial screen size
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="our-people-section">
      <div className="our-people-container">
        <div className="people-content">
          <img 
            src={peopleImage} 
            alt="A close-up group photo of electricians in uniform, smiling confidently at the camera." 
            className="people-image" 
          />
          <div className="people-text">
            <hr />
            <h2 className="people-title montserrat-regular">
              <span className="highlight-orange" style={{marginRight:'10px'}}>Our </span>
              <span className="highlight-blue"> People</span>
            </h2>
            <p className="people-paragraph montserrat-regular">
              Our greatest asset is our people, including experienced engineers, skilled technicians, 
              project managers, and support staff. Passionate and dedicated, our team operates in unison, 
              driven by commitment to quality, reliability, and customer satisfaction.
            </p>
            <hr />
          </div>
        </div>
        
        <div className="route-content">
          <h2 className="route-title montserrat-regular">
            <span className="highlight-blue">
              {isMobile ? 'OUR ROUTE' : 'OUR ROUTE '}
            </span>
            <span className="highlight-orange">{isMobile ? ' TO SUCCESS ' : 'TO SUCCESS '}</span>
          </h2> 
          <p className="route-paragraph montserrat-regular">
            Discover our expertise in electrical engineering, where innovation meets reliability. With a focus 
            on cutting-edge solutions, we specialise in delivering seamless integration and Industry standard 
            project practices. Our team's deep technical knowledge ensures excellence in every project, setting 
            new standards in electrical engineering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
