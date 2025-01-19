import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Carousel from '../components/ServicePage3dCarousel';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles.css';

// Importing all the images
import titleDivider from "../assets/img/service_text_divider.png";
import img1 from "../assets/img/service6/service6_carousel1_img1.png";
import img2 from "../assets/img/service6/service6_carousel2_img2.png";
import img3 from "../assets/img/service6/service6_carousel2_img1.png";
import img4 from "../assets/img/service6/service6_carousel2_img2.png";
import img5 from "../assets/img/service6/service6_carousel3_img1.png";
import img6 from "../assets/img/service6/service6_carousel3_img2.png";
import img7 from "../assets/img/service6/service6_carousel4_img1.png";
import img8 from "../assets/img/service6/service6_carousel4_img2.png";
import img9 from "../assets/img/service6/service6_carousel5_img1.png";
import img10 from "../assets/img/service6/service6_carousel5_img2.png";
import img11 from "../assets/img/service6/service6_carousel6_img1.png";
import img12 from "../assets/img/service6/service6_carousel6_img2.png";


let theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h6: {
      letterSpacing: 'normal',
    },
    body1: {
      letterSpacing: 'normal',
    },
    body2: {
      letterSpacing: 'normal',
    },
  },
});

theme = responsiveFontSizes(theme)

const sections = [
  {
    heading: "Energy Management Systems (EMS)",
    description: "Our EMS solutions enable you to monitor, analyse, and optimise energy consumption in your buildings or facilities. By identifying energy-saving opportunities, you can reduce costs and contribute to a greener environment.",
    images: [img1, img2]
  },
  {
    heading: "Power Quality Analysis",
    description: "We assess power quality issues like voltage fluctuations and harmonics that can affect the performance and lifespan of your electrical equipment. Our analysis helps you identify and rectify these problems, ensuring optimal power quality for your operations.",
    images: [img3, img4]
  },
  
  {
    heading: "Automation and Control Systems",
    description: "We design and implement advanced automation and control solutions that enhance the efficiency, safety, and reliability of your electrical systems. Our solutions can be tailored to a wide range of industrial and commercial applications.",
    images: [img5, img6]
  },
  {
    heading:"Building Management Systems (BMS)",
    description:"Integrate your electrical systems with a Building Management System (BMS) for centralised control and monitoring. This allows for efficient energy management, improved comfort, and enhanced security.",
    images:[img7, img8]
  },
  {
    heading:"Electrical Safety Training",
    description:"We offer comprehensive safety training programs for your employees, covering electrical hazards, safe work practices, and emergency procedures. Our training helps create a safer working environment and reduces the risk of accidents.",
    images:[img9, img10]
  },
  {
    heading:"Electrical Safety Audits",
    description:"Our detailed safety audits identify potential electrical hazards and ensure compliance with safety regulations. We provide comprehensive reports with recommendations for corrective actions, helping you maintain a safe and compliant electrical infrastructure.",
    images:[img11, img12]
  },
];
const MainComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ padding: '20px' }}>
        {sections.map((section, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row-reverse' : 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '80px',
            }}
          >
            <Box
              sx={{
                flex: 1,
                margin: { xs: '0 0 20px 0', md: '40px' },
                padding: { xs: '0', md: '20px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                maxWidth: { xs: '100%', md: '40%' },
                minWidth: '300px',
                textAlign: 'left',
              }}
            >
              <Typography variant="h6" gutterBottom sx={{  }}>
                {section.heading}
              </Typography>
              <Box component="img" src={titleDivider} alt="Divider" sx={{ width: '15%', height: '2px', marginBottom: '20px' }} />
              <Typography variant="body1" gutterBottom>
                {section.description}
              </Typography>
              {section.bullets && (
                <List sx={{ listStyleType: 'disc', pl: 2 }}>
                  {section.bullets.map((bullet, i) => (
                    <ListItem key={i} disablePadding sx={{ display: 'list-item' }}>
                      <ListItemText primary={bullet} />
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
            <Box 
              sx={{ 
                flex: 1, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '100%',
                maxWidth: { xs: '100%', md: '50%' },
                mt: { xs: '20px', md: '0' }
              }}
            >
              <Carousel images={section.images} />
            </Box>
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default MainComponent;