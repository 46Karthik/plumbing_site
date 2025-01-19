import React from 'react';
import '../styles.css';

function Mission() {
  return (
    <div className="mission-container ">
      
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
      <div className="mission-box">
        <h2 className="mission-title montserrat-medium"><span className="dot blue-dot"></span> OUR MISSION</h2>
        <ul className="mission-list montserrat-medium">
          <li>Delivering exceptional high-tension electrical contracting services.</li>
          <li>Ensuring safety and sustainability with clear communication in all projects.</li>
          <li>Exceeding customer expectations through continuous improvement.</li>
          <li>Powering progress and enhancing community life with reliable electrical solutions.</li>
          <li>Pioneering cutting-edge technologies and methodologies.</li>
        </ul>
      </div>
    </div>
  );
}

export default Mission;
