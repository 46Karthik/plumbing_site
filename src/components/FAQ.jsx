import React, { useState } from 'react';
import '../styles.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    "What services does your electrical engineering company provide?",
    "Do you offer residential electrical system design and installation?",
    "Can your company handle commercial electrical projects?",
    "Are your electrical engineers licensed and experienced?",
    "What types of industries do you provide electrical solutions for?",
  ];

  const answers = [
    "Electrapower Engineering provides a comprehensive range of electrical solutions, from initial design and consulting to installation, commissioning, robust liaisoning and ongoing maintenance. Our services cater to diverse sectors, including Automobile, Apartments, Industries, Hospitals, and all other infrastructure projects.",
    "Yes, Electrapower Engineering absolutely offers residential electrical system design and installation services. We specialize in creating safe, efficient, and aesthetically pleasing electrical solutions that cater to the unique needs of modern homes & residential apartments.",
    "Yes, Electrapower Engineering is well-equipped to handle commercial electrical projects of varying scales and complexities. We have a proven track record of successfully completing projects for a wide range of commercial establishments, including office buildings, retail stores, restaurants, hotels, and more.",
    <>
    <p>Yes, absolutely! At Electrapower Engineering, we prioritize both expertise and safety. All our electrical engineers and electricians are fully licensed and possess extensive experience in their respective fields.</p>
    <p>Our team undergoes rigorous training and continuous professional development to stay up-to-date with the latest industry standards and technologies. This ensures that they are well-equipped to handle any electrical project, big or small, with the utmost professionalism and efficiency.</p>
    <p>We understand the critical role that electrical systems play in ensuring the safety and functionality of your business or home. That's why we are committed to providing you with the highest level of expertise and workmanship, delivered by a team you can trust.</p>
  </>,    <>
      <p>Electrapower Engineering provides electrical solutions for a diverse range of industries, including:</p>
      <br />
      <ul className='styled-list'>
      <li><strong>Manufacturing:</strong> We cater to various manufacturing sectors, including automotive, electronics, food processing, pharmaceuticals, and more. Our expertise ensures reliable power distribution and control systems that optimize production processes.</li>
      <li><strong>Production:</strong> We support diverse production facilities, such as assembly lines, warehouses, and distribution centers, with efficient and safe electrical infrastructure.</li>
      <li><strong>Mining:</strong> We specialize in designing and implementing robust electrical systems for challenging mining environments, ensuring uninterrupted operations even under demanding conditions.</li>
      <li><strong>Commercial:</strong> We create functional and aesthetically pleasing electrical solutions for commercial buildings like offices, retail spaces, and hospitality establishments.</li>
      <li><strong>Healthcare:</strong> We understand the critical nature of electrical systems in healthcare facilities, providing reliable and safe solutions for hospitals, clinics, and laboratories.</li>
      <li><strong>Infrastructure:</strong> We have extensive experience in powering large-scale infrastructure projects, including airports, railways, and public transport systems.</li>
      <li><strong>Residential:</strong> We create comfortable and safe living environments by designing and installing electrical systems tailored to modern homes and apartments.</li>
    </ul>
    </>
    
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title montserrat-medium">FREQUENTLY <span className="faq-highlight">ASKED</span> QUESTIONS</h2>
      <hr className="faq-divider" />
      {questions.map((question, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question montserrat-regular" onClick={() => toggleQuestion(index)}>
            {question}
            <span className="faq-arrow">{openIndex === index ? '▲' : '▼'}</span>
          </div>
          {openIndex === index && (
            <div className="faq-answer montserrat-regular">
              {answers[index]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
