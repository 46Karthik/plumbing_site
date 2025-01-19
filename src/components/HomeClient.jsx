import { useRef, useEffect, useState } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { keyframes } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DividerImage from '../assets/img/client_divider.png';
import axios from 'axios';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 470,
      md: 900,
      lg: 1440,
      xl: 1920,
    }
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
  },
});

const ClientsCarousel = () => {
  const [clients, setClients] = useState([]);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const scrollerRef = useRef(null);
  const scrollerInnerRef = useRef(null);

  useEffect(() => {
    const fetchClientLogos = async () => {
      try {
        const response = await axios.get('https://4m6h7psse2.execute-api.ap-south-1.amazonaws.com/v1/getClientLogoURLs');
        const logoUrls = response.data;
        const clientData = logoUrls.map(url => ({
          src: url,
          alt: 'Client Logo'
        }));
        setClients(clientData);
      } catch (error) {
        console.error('Error fetching client logos:', error);
      }
    };

    fetchClientLogos();
  }, []);

  useEffect(() => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return;

    const scrollerContent = Array.from(scrollerInnerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInnerRef.current.appendChild(duplicatedItem);
    });

    const scrollSpeed = isMobile ? 50 : 30;

    const scroll = () => {
      if (scrollerRef.current.scrollLeft >= scrollerInnerRef.current.scrollWidth / 2) {
        scrollerRef.current.scrollLeft = 0;
      } else {
        scrollerRef.current.scrollLeft += 1;
      }
    };

    const scrollInterval = setInterval(scroll, scrollSpeed);

    return () => clearInterval(scrollInterval);
  }, [isMobile, clients]);

  const carouselContent = (
    <Box
      ref={scrollerRef}
      sx={{
        width: '100%',
        overflow: 'hidden',
        '&::-webkit-scrollbar': { display: 'none' },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      <Box
        ref={scrollerInnerRef}
        sx={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        {clients.map((client, index) => (
          <Box 
            key={index} 
            component="img" 
            src={client.src} 
            alt={client.alt} 
            sx={{ 
              margin: '0 10px', 
              height: isMobile ? '40px' : isTablet ? '40px' : '60px', 
              width: 'auto', 
              flexShrink: 0,
              maxWidth: '100%', 
            }} 
          />
        ))}
      </Box>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: isMobile ? '0px' : isTablet ? '0px' : '90px', 
          flexDirection: isMobile || isTablet ? 'column' : 'row',
          borderRadius: isMobile ? '0' : '25px',
          border: isMobile || isTablet ? 'none' : '0.1px solid grey',
          padding: isMobile ? '0' : isTablet ? '20px' : '30px 40px',
          backgroundColor: isMobile ? 'transparent' : '#fff',
          width: isMobile || isTablet ? '100%' : 'auto',
          maxWidth: '100%',
          overflow: 'hidden',
        }}
      >
        {isMobile || isTablet ? (
          <>
            <Box 
              component="img" 
              src={DividerImage} 
              alt="Divider" 
              sx={{ 
                marginBottom: '20px', 
                height: 'auto', 
                alignSelf: 'center' ,
                maxWidth: '100%'
              }} 
            />
            <Typography 
              variant="h6" 
              sx={{ 
                textAlign: 'center', 
                marginBottom: '20px', 
                fontSize: isTablet ? '20px' : '18px'
              }}
            >
              OUR CLIENTS
            </Typography>
            {carouselContent}
            <Box 
              sx={{ 
                width: '100%', 
                borderTop: '1px dashed grey', 
                marginTop: '20px', 
                marginRight: isTablet ? '0' : '40px'
              }} 
            />
          </>
        ) : (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', color: '#000', marginRight: '20px', flexShrink: 0 }}>
              <Box component="img" src={DividerImage} alt="Divider" sx={{ marginRight: '10px', height: 'auto', maxWidth: '100%' }} />
              <Typography variant="h6">OUR CLIENTS</Typography>
            </Box>
            {carouselContent}
          </>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default ClientsCarousel;