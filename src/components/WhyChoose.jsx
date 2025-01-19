import React from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';

const WhyChoose = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <div className="text-content">
          <h1 className="why-choose-heading montserrat-regular">
            Why Choose <span className="highlight-blue">Electra</span> <span className="highlight-orange">Power</span> Engineering?
          </h1>
          <p className="why-choose-paragraph montserrat-regular">
            Choose us for unparalleled HT and LT electrical solutions backed by a commitment
            to safety, reliable performance, and customer-centricity. With expertise, agility,
            and a focus on innovation, we ensure your electrical infrastructure exceeds
            expectations while fostering trust and integrity.
          </p>
        </div>
        <Link to="/portfolio-projects">
          <button className="portfolio-button montserrat-regular">PORTFOLIO PROJECTS {"-->"}</button>
        </Link>
        <div className="features-container">
          <div className="feature-box">
            <div className="feature-icon star-icon"></div>
            <h2 className="feature-title montserrat-regular">Turnkey Expertise</h2>
            <p className="feature-paragraph montserrat-regular">
              We handle every facet of your project, from design and procurement to
              installation and commissioning.
            </p>
          </div>
          <div className="feature-box">
            <div className="feature-icon cost-icon"></div>
            <h2 className="feature-title montserrat-regular">Client-Centric-Costing</h2>
            <p className="feature-paragraph montserrat-regular">
              Tailored, transparent pricing that aligns with your unique needs and
              delivers maximum value.
            </p>
          </div>
          <div className="feature-box">
            <div className="feature-icon trust-icon"></div>
            <h2 className="feature-title montserrat-regular">Unwavering Trust</h2>
            <p className="feature-paragraph montserrat-regular">
              We prioritise safety, reliability, and quality, adhering to the highest
              industry standards.
            </p>
          </div>
          <div className="feature-box">
            <div className="feature-icon tech-icon"></div>
            <h2 className="feature-title low montserrat-regular">Technical Excellence</h2>
            <p className="feature-paragraph lowp montserrat-regular">
              Our team of experienced engineers and technocrats are equipped with the latest
              knowledge and cutting-edge tools to deliver optimal solutions.
            </p>
          </div>
          <div className="feature-box highlight-blue-box">
            <div className="feature-icon track-record-icon"></div>
            <h2 className="feature-title low montserrat-regular">Proven Track Record</h2>
            <p className="feature-paragraph lowp montserrat-regular text-white">
              Our portfolio stands as a testament to our successful execution of diverse and
              complex electrical projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
