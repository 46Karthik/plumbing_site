import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';
import { createTheme, ThemeProvider , responsiveFontSizes} from '@mui/material/styles';
import Carousel from '../components/ServicePage3dCarousel';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles.css';

// Importing all the images
import titleDivider from "../assets/img/service_text_divider.png";
import img1 from "../assets/img/service3/service3_carousel1_img1.png";
import img2 from "../assets/img/service3/service3_carousel1_img2.png";
import img3 from "../assets/img/service3/service3_carousel2_img1.png";
import img4 from "../assets/img/service3/service3_carousel2_img2.png";
import img5 from "../assets/img/service3/service3_carousel3_img1.png";
import img6 from "../assets/img/service3/service3_carousel3_img2.png";
import img7 from "../assets/img/service3/service3_carousel3_img3.png";
import img8 from "../assets/img/service3/service3_carousel4_img1.png";
import img9 from "../assets/img/service3/service3_carousel4_img2.png";
import img10 from "../assets/img/service3/service3_carousel4_img3.png";
import img11 from "../assets/img/service3/service3_carousel4_img4.png";

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
    heading: "Design and Engineering",
    description: "Our experienced engineers design custom panel boards and control systems tailored to your specific needs. We incorporate the latest automation and control technologies, ensuring efficient and reliable operation of your electrical systems.",
    images: [img1, img2]
  },
  {
    heading: "Fabrication and Assembly",
    description: "We fabricate high-quality panel boards using premium materials and components. Our skilled technicians meticulously assemble and test each panel to ensure it meets stringent quality standards.",
    images: [img3, img4]
  },
  {
    heading: "Installation and Commissioning",
    description: "We provide professional installation and commissioning services for panel boards and control systems, ensuring seamless integration with your existing infrastructure and minimising disruptions to your operations.",
    images: [img5, img6, img7]
  },
  {
    heading: "Specialized Panels",
    description: "We engineer and manufacture a wide range of custom-designed specialised panels to meet your unique industrial, commercial, and infrastructure needs. Our experienced team of engineers and technicians ensures that every panel is designed and built to the highest standards of quality, safety, and performance. We use only top-grade components and materials to guarantee long-lasting reliability.",
    images: [img8, img9, img10, img11],
    bullets: [
      "Power Control Centers (PCCs): Centralised control and protection for high-voltage power distribution systems.",
      "Motor Control Centers (MCCs): Efficient control and protection for multiple motors in industrial settings.",
      "Generator Control Panels: Seamless integration and control of generators for backup power supply.",
      "Automatic Mains Failure (AMF) Panels: Reliable automatic switching to backup power in case of mains failure.",
      "Programmable Logic Controller (PLC) Panels: Versatile automation control solutions for complex industrial processes.",
      "Rittal Panels (modular enclosure systems): Versatile and scalable enclosures for various electrical applications.",
      "Automatic Power Factor Correction (APFC) Panels: Improve power factor and reduce energy costs for optimal efficiency.",
      "Control Desks: Ergonomic operator interfaces for efficient monitoring and control of electrical systems.",
      "Drive Panels (VFD Panels): Precise control of motor speed and torque for enhanced energy efficiency.",
      "Metering Panels: Accurate energy monitoring and data collection for informed decision-making.",
      "Bus Duct Systems: Efficient and flexible power distribution for large commercial and industrial facilities.",
      "Synchronisation Panels: Safe and reliable synchronisation of generators with the electrical grid."
    ]
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
              marginBottom: '80px',
              borderRadius: index === 3 ? '8px' : 'none',
              border: index === 3 ? '2px solid gray' : 'none',
              padding: index === 3 ? '20px' : 'none',
              marginX: index === 3 ? { xs: '20px', md: '40px' } : 'none',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row-reverse' : 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: { xs: 'justify', md: 'left' },
                marginBottom: '80px',
                px: { xs: 2, md: 0 },
                width: '100%',
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
                  alignItems: { xs: 'flex-start', md: 'flex-start' },
                  maxWidth: { md: '40%' },
                  minWidth: '300px',
                  textAlign: { xs: 'left', md: 'left' },
                }}
              >
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, textAlign:'left' }}
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
                  sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, textAlign: 'left' }}
                >
                  {section.description}
                </Typography>
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
            {index === 3 && (
              <Box sx={{ width: '100%', marginTop: '20px' }}>
                <Box component="img" src={titleDivider} alt="Divider" sx={{ width: '100%', height: '2px', marginY: '20px' }} />
                <Grid container spacing={4} sx={{ justifyContent: 'space-between' }}>
                  <Grid item xs={6}>
                    <List sx={{ listStyleType: 'disc', pl: 2 }}>
                      {section.bullets.slice(0, Math.ceil(section.bullets.length / 2)).map((bullet, i) => (
                        <ListItem key={i} disablePadding sx={{ display: 'list-item' }}>
                          <ListItemText primary={<Typography variant="body1" component="span"><strong>{bullet.split(':')[0]}:</strong>{bullet.split(':')[1]}</Typography>} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={6}>
                    <List sx={{ listStyleType: 'disc', pl: 2 }}>
                      {section.bullets.slice(Math.ceil(section.bullets.length / 2)).map((bullet, i) => (
                        <ListItem key={i} disablePadding sx={{ display: 'list-item' }}>
                          <ListItemText primary={<Typography variant="body1" component="span"><strong>{bullet.split(':')[0]}:</strong>{bullet.split(':')[1]}</Typography>} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default MainComponent;