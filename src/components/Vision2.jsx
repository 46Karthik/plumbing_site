import React from 'react';
import '../styles.css';

function Vision2() {
  return (
    <div className="vision2-container">
      <div className="text-section">
        <h1 className="heading montserrat-medium">
          Driving Change,
        </h1>
        <h1 className="sub-heading montserrat-medium">
          Powering Possibilities
        </h1>
        <p className="paragraph montserrat-regular">
          We are catalysts for change. By pushing the boundaries of what's possible
          and harnessing the power of imagination, we not only drive change but
          also empower endless possibilities for our clients and partners.
        </p>
      </div>
      <div className="stats-container">
        <div className="stat-item">
          <h2 className="stat-number">12+</h2>
          <p className="stat-description">Years of Experience</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h2 className="stat-number text-orange">300+</h2>
          <p className="stat-description">Projects Delivered</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h2 className="stat-number">250+</h2>
          <p className="stat-description">Happy Clients</p>
        </div>
      </div>
      <div className="vision-section">
        <div className="vision-box">
          <h2 className="vision-title montserrat-medium">
            <span className="dot"></span> OUR VISION
          </h2>
          <p className="vision-paragraph montserrat-regular">
            We envision leading the electrical industry with innovation and excellence.
            Rooted in trust and transparency, we aim to deliver tailored solutions
            that surpass expectations, empowering industries and communities with safe,
            reliable, and sustainable electrical solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision2;
