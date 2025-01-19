// import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Carousel from '../components/ServicePage3dCarousel';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles.css';

// Importing all the images
import titleDivider from "../assets/img/service_text_divider.png";
import img1 from "../assets/img/service1/img1.webp";
import img2 from "../assets/img/service1/img2.webp";
import img3 from "../assets/img/service1/img3.webp";
import img4 from "../assets/img/service1/img4.webp";
import img5 from "../assets/img/service1/img5.webp";
import img6 from "../assets/img/service1/img6.webp";
import img7 from "../assets/img/service1/img7.webp";
import img8 from "../assets/img/service1/img8.webp";
import img9 from "../assets/img/service1/service1_carousel3_img3.png";
import img10 from "../assets/img/service1/service1_carousel4_img1.png";
import img11 from "../assets/img/service1/service1_carousel4_img2.png";
import img12 from "../assets/img/service1/service1_carousel4_img2.png";

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
    heading: "Electrical System Design",
    description: "Electra Power Engineering provides expert electrical system design services for residential, commercial, industrial, and infrastructure projects. Our experienced engineers leverage the latest technologies and industry best practices to create tailored designs that optimise safety, efficiency, and cost-effectiveness.",
    bullets: [
      "Conceptual Design and Load Calculations",
      "Detailed Engineering Design (Schematic Drawings, Cable Schedules, Equipment Layouts)",
      "Design for specific applications"
    ],
    images: [img1, img2, img3]
  },
  {
    heading: "Energy Audits And Analysis",
    description: "Our comprehensive energy audits identify opportunities to reduce energy consumption and lower costs. We analyse your existing electrical systems, identify inefficiencies, and recommend tailored solutions that align with your budget and sustainability goals.",
    images: [img4, img5, img6]
  },
  {
    heading: "Value Engineering",
    description: "We specialise in value engineering, optimising your electrical designs to minimise costs without compromising quality or safety. Our team of experts identifies cost-effective alternatives and innovative solutions to maximise the value of your investment.",
    images: [img7, img8, img9]
  },
  {
    heading: "Technical Consulting",
    description: "Need expert advice on electrical codes, standards, or regulations? Electra Power Engineering offers comprehensive technical consulting services. We provide feasibility studies, technical due diligence, and expert recommendations to ensure your electrical projects are compliant, safe, and efficient.",
    images: [img10, img11, img12]
  }
];

const MainComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='section-1'>
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
                  textAlign: { xs: 'left', md: 'left' }, // Text alignment
                }}
              >
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, textAlign:'left' }} // Adjust font size
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
                  sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, textAlign: 'left' }} // Adjust font size and text alignment
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
      </div>
    </ThemeProvider>
  );
};

export default MainComponent;
