import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { Box, Typography, Avatar, Card, CardContent, IconButton, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Import images
import mapWithAvatars from '../assets/img/tetimonial_map_webimage.webp';
import cardDivider from '../assets/img/home_testimonial_card_divider.png';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1439,
      lg: 1440,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const PowerfulInsights = () => {
  const [testimonials, setTestimonials] = useState([]); // State to hold testimonials
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTabletLandscape = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const carouselRef = useRef(null);
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Fetch testimonials data from the API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('https://qenb25ilw8.execute-api.ap-south-1.amazonaws.com/v1/getTestimonial');
        if (response.status === 200) {
          // Sort testimonials by index field
          const sortedTestimonials = response.data.data.sort((a, b) => a.index - b.index);
          setTestimonials(sortedTestimonials); // Set the testimonials state with sorted data
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const handleNext = () => {
    setCurrentTestimonial((prev) => Math.min(prev + 1, testimonials.length - 1));
  };
  
  const handlePrev = () => {
    setCurrentTestimonial((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    if ((isMobile || isTabletLandscape) && carouselRef.current) {
      let startX;
      let scrollLeft;

      const onTouchStart = (e) => {
        startX = e.touches[0].pageX - carouselRef.current.offsetLeft;
        scrollLeft = carouselRef.current.scrollLeft;
      };

      const onTouchMove = (e) => {
        if (!startX) return;
        const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        carouselRef.current.scrollLeft = scrollLeft - walk;
      };

      carouselRef.current.addEventListener('touchstart', onTouchStart);
      carouselRef.current.addEventListener('touchmove', onTouchMove);

      return () => {
        if (carouselRef.current) {
          carouselRef.current.removeEventListener('touchstart', onTouchStart);
          carouselRef.current.removeEventListener('touchmove', onTouchMove);
        }
      };
    }
  }, [isMobile, isTabletLandscape]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        padding: isMobile ? 2 : isTablet ? 3 : 4,
        display: 'flex', 
        flexDirection: isMobile || isTablet ? 'column' : 'row',
        alignItems: isMobile || isTablet ? 'center' : 'flex-start',
        justifyContent: isMobile || isTablet ? 'center' : 'flex-start',
        marginLeft: isMobile ? 0 : isTablet ? '0' : '95px',
        maxWidth: isTablet ? '100%' : 'none',
        marginBottom: isTablet ? 4 : 0
      }}>
        {!isMobile && !isTabletLandscape && (
          <Box sx={{ 
            flex: 1, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
          }}>
            <img 
              src={mapWithAvatars} 
              alt="Electrapower Engineering: Highlighting Customer feedback through testimonials." 
              style={{ 
                width: '545.6px',
                height: 'auto',
                maxHeight: '403.44px',
                objectFit: 'contain'
              }} 
            />
          </Box>
        )}
        
        <Box sx={{ 
          flex: 1,
          width: isMobile || isTabletLandscape ? '100%' : 'auto',
          maxWidth: isTabletLandscape ? '800px' : 'none',
        }}>
          <Box 
            sx={{ 
              display: 'inline-block', 
              backgroundColor: '#F7F7F7',
              borderRadius: '20px', 
              padding: '4px 12px',
              marginBottom: 1
            }}
          >
            <Typography 
              variant={isMobile || isTabletLandscape ? "caption" : "subtitle2"}
              sx={{ color: '#2489DE' }} 
            >
              ELECTRA POWER ENGINEERING COMMUNITY
            </Typography>
          </Box>
          
          <Typography variant={isMobile ? "h4" : isTabletLandscape ? "h3" : "h2"} component="h1" sx={{ marginTop: '30px'}} >
            Powerful <span style={{ color: '#FF6B00' }}>Insights</span>
          </Typography>
          
          <Typography variant={isMobile || isTabletLandscape ? "body2" : "subtitle1"} sx={{ mb: 3, color: '#555', marginTop: '20px'}} className="montserrat-regular">
            Get an insight into the valuable and impactful thoughts direct from our clients.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant={isMobile || isTabletLandscape ? "body2" : "body1"} className="montserrat-regular">REVIEWS & TESTIMONIALS</Typography>
            <Box>
              <IconButton size="small" onClick={handlePrev} disabled={currentTestimonial === 0}>
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton size="small" onClick={handleNext} disabled={currentTestimonial === testimonials.length - 1}>
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Box>
          
          <Box 
            ref={carouselRef}
            sx={{ 
              display: 'flex', 
              overflow: 'hidden',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                elevation={3} 
                sx={{ 
                  borderRadius: 2, 
                  minWidth: isMobile || isTabletLandscape ? '100%' : '75%', 
                  marginRight: 2,
                  transform: `translateX(${-100 * currentTestimonial}%)`,
                  transition: 'transform 0.3s ease-in-out',
                  height: isMobile || isTabletLandscape ? 'auto' : '250px',
                }}
              >
                <CardContent sx={{ display: 'flex', gap: 2, height: '100%' }}>
                  <Avatar src={testimonial.profile_icon_url} sx={{ width: 34, height: 34 }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, overflow: 'hidden' }}>
                    <Typography variant={isMobile || isTabletLandscape ? "body2" : "body1"} className="montserrat-regular">{testimonial.name}</Typography>
                    <Typography variant="body2" sx={{ color: '#555' }} className="montserrat-regular">{testimonial.position}</Typography>
                    <img src={cardDivider} alt="Divider" style={{ width: '100%', height: 'auto', margin: '8px 0' }} />
                    <Typography variant={isMobile || isTabletLandscape ? "caption" : "body2"} className="montserrat-regular" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {testimonial.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
        
        {(isMobile || isTabletLandscape) && (
          <Box sx={{ 
            width: '100%',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            marginTop: 2,
            order: 1
          }}>
            <img 
              src={mapWithAvatars} 
              alt="Electrapower Engineering: Highlighting Customer feedback through testimonials." 
              style={{ 
                width: '80%',
                height: 'auto',
                objectFit: 'contain'
              }} 
            />
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default PowerfulInsights;
