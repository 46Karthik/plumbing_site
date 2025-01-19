import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Carousel from '../components/ServicePage3dCarousel';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles.css';

// Importing all the images
import titleDivider from "../assets/img/service_text_divider.png";
import img1 from "../assets/img/service2/service2_carousel1_img1.png";
import img2 from "../assets/img/service2/service2_carousel1_img2.png";
import img3 from "../assets/img/service2/service2_carousel1_img3.png";
import img4 from "../assets/img/service2/service2_carousel2_img1.png";
import img5 from "../assets/img/service2/service2_carousel2_img2.png";
import img6 from "../assets/img/service2/service2_carousel2_img3.png";
import img7 from "../assets/img/service2/service2_carousel3_img2.png";
import img8 from "../assets/img/service2/service2_carousel3_img3.png";
import img9 from "../assets/img/service2/service2_carousel3_img4.png";
import img10 from "../assets/img/service2/service2_carousel4_img1.png";
import img11 from "../assets/img/service2/service2_carousel4_img2.png";
import img12 from "../assets/img/service2/service2_carousel4_img3.png";

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

theme = responsiveFontSizes(theme);

const sections = [
  {
    heading: "Electrical Installations (HT/LT):",
    description: "Our skilled electricians provide professional installation services for high-tension (HT) and low-tension (LT) electrical systems. We ensure seamless integration of switchgear, transformers, panels, and other equipment, adhering to the highest safety and quality standards.",
    images: [img1, img2, img3]
  },
  {
    heading: "Internal Electrification:",
    description: "We offer comprehensive internal electrification solutions for residential, commercial, industrial and infrastructure projects of any scale. Our services include wiring, lighting installations, outlet and switch installations, and integration with automation systems.",
    images: [img4, img5, img6]
  },
  {
    heading: "Specialised Installations",
    description: "Electra Power Engineering specialises in the installation of complex electrical systems, including:",
    bullets: [
      "Generators and Backup Power Systems",
      "Solar Power Systems (Rooftop and Ground-Mounted)",
      "Electric Vehicle (EV) Charging Stations",
      "Fire Alarm Systems and Emergency Lighting"
    ],
    images: [img7, img8, img9]
  },
  {
    heading: "Testing and Commissioning",
    description: "We rigorously test and commission all electrical installations to ensure optimal performance, safety, and compliance with industry standards. Our meticulous approach minimises downtime and ensures the longevity of your electrical systems.",
    images: [img10, img11, img12]
  }
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
              textAlign: { xs: 'justify', md: 'left' },
              marginBottom: '80px',
              px: { xs: 2, md: 0 },
              width: '100%', // Occupy full width
            }}
          >
            <Box
              sx={{
                flex: 1,
                margin: { xs: '0 0 20px 0', md: '40px' }, // Increased bottom margin for mobile
                padding: { xs: '0', md: '20px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: { xs: 'flex-start', md: 'flex-start' },
                maxWidth: { md: '40%' },
                minWidth: '300px',
                textAlign: { xs: 'justify', md: 'left' }, // Text alignment
              }}
            >
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} // Adjust font size
              >
                {section.heading}
              </Typography>
              <Box 
                component="img" 
                src={titleDivider} 
                alt="Divider" 
                sx={{ 
                  width: '15%', 
                  height: '2px', 
                  marginBottom: '20px' 
                }} 
              />
              <Typography 
                variant="body1" 
                gutterBottom 
                sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, textAlign: 'justify' }} // Adjust font size and text alignment
              >
                {section.description}
              </Typography>
              {section.bullets && (
                <List sx={{ listStyleType: 'disc', pl: 2 }}>
                  {section.bullets.map((bullet, i) => (
                    <ListItem key={i} disablePadding sx={{ display: 'list-item' }}>
                      <ListItemText 
                        primary={bullet} 
                        sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }} // Adjust font size
                      />
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
                width: '100%', // Full width
                mt: { xs: '20px', md: '0' } // Increased top margin for mobile
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
