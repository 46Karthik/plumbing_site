import { useState, useEffect } from 'react';
import { Grid, Box, Typography, Divider, useMediaQuery, useTheme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import axios from "axios";

const customTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 910,
      lg: 1440,
      xl: 1920,
    },
  },
});

const fadeInFromTopLeft = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeInOutAnimation = keyframes`
  0%, 100% {
    opacity: 1;
    
  }
  50% {
    opacity: 0.1;
    
  }
`;

function useAnimateNumbers() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return animate;
}

function SectionComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isSmallScreen = isMobile || isTablet;
  const animate = useAnimateNumbers();

  const [statistics, setStatistics] = useState({
    experience: { value: '', title: '' },
    projects: { value: '', title: '' },
    clients: { value: '', title: '' },
  });


  useEffect(() => {
    // Fetch the API data on component mount
    const fetchStatistics = async () => {
      try {
        const response = await axios.get('https://dd87lvmo4f.execute-api.ap-south-1.amazonaws.com/v1/getAboutUsStatistics');
        const data = response.data.data;

        // Parse the response and set the state based on the position value
        const experience = data.find(item => item.position === 1.0);
        const projects = data.find(item => item.position === 2.0);
        const clients = data.find(item => item.position === 3.0);

        setStatistics({
          experience: { value: experience.value, title: experience.title },
          projects: { value: projects.value, title: projects.title },
          clients: { value: clients.value, title: clients.title },
        });
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, []);

  const animatedTypographyStyle = {
    animation: animate ? `${fadeInOutAnimation} 4s ease-in-out infinite` : 'none',
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', marginBottom: '100px', backgroundColor: '#fff', color: '#333' }}>
        <Grid container spacing={isSmallScreen ? 2 : 3} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Box sx={{ marginRight: isSmallScreen ? 0 : '40px', textAlign: 'left', marginBottom: '40px', marginLeft: isSmallScreen ? 0 : '60px' }}>
              <Typography variant="h3" sx={{ color: '#3a3a3a', transition: 'color 0.3s ease-in-out' }}>
                Driving Change,
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: '#3a3a3a',
                  marginTop: '0px',
                  marginBottom: '40px',
                  animation: `${fadeInFromTopLeft} 5s ease-in-out 1s forwards`
                }}
              >
                Powering Possibilities
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
                We are catalysts for change. By pushing the boundaries of what's possible and harnessing the power of imagination, we not only drive change but also empower endless possibilities for our clients and partners.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: isSmallScreen ? '-10px' : '35px', flexWrap: isSmallScreen ? 'wrap' : 'nowrap' }}>
              <Box sx={{ textAlign: 'left', margin: isSmallScreen ? '0 10px 10px' : '0 25px', flex: isSmallScreen ? '1 0 45%' : 'none', padding: isSmallScreen ? '10px' : '0', backgroundColor: isSmallScreen ? '#f5f5f5' : 'transparent', borderRadius: isSmallScreen ? '10px' : '0' }}>
                <Typography variant="h2" sx={{ ...animatedTypographyStyle, color: '#007bff', margin: 0, fontWeight: 500 }}>
                  {statistics.experience.value}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: isSmallScreen ? '12px' : '16px', margin: 0, color: '#333' }}>
                  {statistics.experience.title}
                </Typography>
              </Box>
              {!isSmallScreen && <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />}
              <Box sx={{ textAlign: 'left', margin: isSmallScreen ? '0 -4px 10px' : '0 25px', flex: isSmallScreen ? '1 0 45%' : 'none', padding: isSmallScreen ? '10px' : '0', backgroundColor: isSmallScreen ? '#f5f5f5' : 'transparent', borderRadius: isSmallScreen ? '10px' : '0' }}>
                <Typography variant="h2" sx={{ ...animatedTypographyStyle, color: '#ff6600', margin: 0, fontWeight: 500 }}>
                  {statistics.projects.value}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: isSmallScreen ? '12px' : '16px', margin: 0, color: '#333' }}>
                  {statistics.projects.title}
                </Typography>
              </Box>
              {!isSmallScreen && <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />}
              <Box sx={{ textAlign: 'left', margin: isSmallScreen ? '0 5px 10px' : '0 25px', flex: isSmallScreen ? '1 0 100%' : 'none', padding: isSmallScreen ? '10px' : '0', backgroundColor: isSmallScreen ? '#f5f5f5' : 'transparent', borderRadius: isSmallScreen ? '10px' : '0' }}>
                <Typography variant="h2" sx={{ ...animatedTypographyStyle, color: '#007bff', margin: 0, fontWeight: 500 }}>
                  {statistics.clients.value}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: isSmallScreen ? '12px' : '16px', margin: 0, color: '#333' }}>
                  {statistics.clients.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ marginBottom: '50px', marginLeft: isSmallScreen ? '0' : '60px', marginRight: isSmallScreen ? '0' : '10px', maxWidth: '600px' }}>
              <Box sx={{ backgroundColor: isSmallScreen ? '#f5f5f5' : '#ffffff', padding: '30px', borderRadius: '15px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', width: '100%', textAlign: 'left' }}>
                <Typography variant="h6" sx={{ color: '#ff6600', marginBottom: '10px', marginTop: '10px' }}>
                  <Box component="span" sx={{ backgroundColor: '#ff5733', width: '10px', height: '10px', borderRadius: '15px', display: 'inline-block', marginRight: '10px' }} />
                  OUR VISION
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '0.9rem', lineHeight: 2.5, color: '#3a3a3a' }}>
                  We envision leading the electrical industry with innovation and excellence. Rooted in trust and transparency, we aim to deliver tailored solutions that surpass expectations, empowering industries and communities with safe, reliable, and sustainable electrical solutions.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginLeft: isSmallScreen ? '0' : '60px', marginTop: '10px', marginRight: isSmallScreen ? '0' : '10px', maxWidth: '600px' }}>
              <Box sx={{ backgroundColor: isSmallScreen ? '#f5f5f5' : '#ffffff', padding: '30px', borderRadius: '15px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', width: '100%', textAlign: 'left' }}>
                <Typography variant="h6" sx={{ color: '#007bff', marginBottom: '10px', marginTop: '10px' }}>
                  <Box component="span" sx={{ backgroundColor: '#007bff', width: '10px', height: '10px', borderRadius: '15px', display: 'inline-block', marginRight: '10px' }} />
                  OUR MISSION
                </Typography>
                <Box variant="body2" sx={{ 
                  fontSize: '1rem', 
                  lineHeight: 2.2, 
                  color: '#333',
                  margin: 0,
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                }}>
                  <ul className="styled-list">
                    <li>Delivering exceptional high-tension electrical contracting services.</li>
                    <li>Ensuring safety and sustainability with clear communication in all projects.</li>
                    <li>Exceeding customer expectations through continuous improvement.</li>
                    <li>Powering progress and enhancing community life with reliable electrical solutions.</li>
                    <li>Pioneering cutting-edge technologies and methodologies.</li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default SectionComponent;