import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "../styles.css"
import imageDivider from "../assets/img/success_heading_divider.png";
// desktop view images
import img1 from '../assets/img/expertise_alt.png';
import img2 from '../assets/img/agility_alt.png';
import img3 from '../assets/img/integrity_alt.png';
import img4 from '../assets/img/innovative_alt.png';
import img5 from '../assets/img/client_alt.png';
import img6 from '../assets/img/collab_alt.png';


const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
    fontWeightBold: 'bold',
    fontSize: 30
  },
});

function SuccessCards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const desktopImg = [
    { 
      text: "Expertise", 
      number: 1, 
      image: img1,
      content: `Benefit from our team's extensive knowledge and skills in electrical engineering, ensuring proficient and reliable solutions.`
    },
    { 
      text: "Agility", 
      number: 2, 
      image: img2,
      content: `Experience our quick and flexible response to your needs, adapting swiftly to changing project requirements and timelines.` 
    },
    { 
      text: "Integrity", 
      number: 3, 
      image: img3,
      content: `Trust in our commitment to honesty, transparency, and ethical conduct in all aspects of our work, fostering long-term partnerships based on integrity.` 
    },
    { 
      text: "Innovative", 
      number: 4, 
      image: img4,
      content: `Access cutting-edge solutions and technologies as we continuously explore new ideas and approaches to enhance efficiency and effectiveness.`
    },
    { 
      text: "Client Centric", 
      number: 5, 
      image: img5,
      content: `Enjoy personalised attention and tailored solutions that prioritise your unique requirements, ensuring your satisfaction and success.`
    },
    { 
      text: "Collaboration", 
      number: 6, 
      image: img6,
      content: `We believe in teamwork and foster a collaborative environment where everyone's ideas are valued.` 
    },
  ];

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="route-to-success">
        <img src={imageDivider} alt="Vector Image"/>
        <h1>OUR ROUTE <span className='orange-text'>TO SUCCESS</span> </h1>
      </div>
      <div className='cardgg'>
        {desktopImg.map((item, index) => (
          <div 
            key={index} 
            className={`semi-hover ${index === hoveredIndex ? 'active' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="content">
              <span className="item-number">{item.number}</span>
              <span className="item-text">{item.text}</span>
            </div>
            {
              isMobileView 
              ? (
                  <div className='image-container'>
                    {
                      item.content
                    }
                  </div>
                )
              : (
                  <div className="image-container">
                    <img src={item.image} alt="" className="hover-image" />
                  </div>
                )
            }
          </div>
        ))}
      </div> 
    </ThemeProvider>
  )
}

export default SuccessCards;