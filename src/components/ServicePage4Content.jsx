import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider , responsiveFontSizes} from '@mui/material/styles';
import Carousel from '../components/ServicePage3dCarousel';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles.css';

// Importing all the images
import titleDivider from "../assets/img/service_text_divider.png";
import img1 from "../assets/img/service5/service5_carousel1_img1.png";
import img2 from "../assets/img/service5/service5_carousel1_img2.png";
import img3 from "../assets/img/service5/service5_carousel1_img3.png";
import img4 from "../assets/img/service5/service5_carousel1_img4.png";
import img5 from "../assets/img/service5/service5_carousel2_img1.png";
import img6 from "../assets/img/service5/service5_carousel2_img2.png";
import img7 from "../assets/img/service5/service5_carousel3_img1.png";
import img8 from "../assets/img/service5/service5_carousel3_img2.png";
import img9 from "../assets/img/service5/service5_carousel3_img3.png";
import img10 from "../assets/img/service5/service5_carousel3_img4.png";
import img11 from "../assets/img/service5/service5_carousel4_img1.png";
import img12 from "../assets/img/service5/service5_carousel4_img2.png";
import img13 from "../assets/img/service5/service5_carousel5_img1.png";
import img14 from "../assets/img/service5/service5_carousel5_img2.png";
import img15 from "../assets/img/service5/service5_carousel5_img3.png";
import img16 from "../assets/img/service5/service5_carousel5_img4.png";

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
    string:{
      letterSpacing: 'normal'
    }
  },
});

theme = responsiveFontSizes(theme);

const sections = [
  {
    heading: "Liaison with KSEB and Electrical Inspectorate",
    description: " We streamline the process of obtaining approvals and permits from the Kerala State Electricity Board (KSEB) and the Electrical Inspectorate. Our team handles all the necessary  documentation and coordination, ensuring timely approvals and compliance with local regulation.",
    images: [img1, img2, img3, img4]
  },
  {
    heading: "Short Circuit and Earthing Design",
    description: "We design and install earthing systems that comply with high end safety standards and regulations. Our solutions protect your electrical systems from short circuits and ensure the safety of your personnel and equipment.",
    images: [img5, img6]
  },
  
  {
    heading: "Approval for Electrical Installations (Addition/Modification)",
    description: "We assist you in obtaining approvals for new electrical installations or modifications to existing systems. Our team ensures that your projects comply with all relevant regulations and standards.",
    images: [img7, img8, img9, img10]
  },
  {
    heading:"GRID-Connected Solar Plant Approvals",
    description:"We facilitate the approval process for grid-connected solar power plants from authorities- KSEB and Inspectorate. Our expertise helps you navigate the regulatory landscape and obtain timely approvals efficiently.",
    images:[img11, img12],
  },
  {
    heading: "Obtaining Sanction for Energization",
    description:"We work closely with the Electrical Inspectorate to obtain sanction for energization after a thorough inspection and compliance verification of your electrical installation.",
    images:[img13, img14, img15, img16]
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

export default MainComponent;;
