import { useState, useEffect, useRef } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, IconButton, Divider } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Theme configuration
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 910,
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

const CarouselCard = ({ card, isFullyVisible, isOverlappingButton, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      sx={{
        width: 'auto',
        height: 369,
        position: 'relative',
        overflow: 'hidden',
        opacity: isMobile ? 1 : (isFullyVisible ? (isOverlappingButton ? 0.5 : 1) : 0.5),
        transition: 'all 0.3s',
        borderRadius: '16px',
        pointerEvents: isMobile ? 'auto' : (isFullyVisible && !isOverlappingButton ? 'auto' : 'none'),
      }}
    >
      <CardMedia
        component="img"
        image={card.image_url}
        alt={card.alt}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />
      <CardContent
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: isHovered ? '50%' : '80px',
          background: isHovered ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.5)',
          color: 'white',
          transition: 'all 0.3s',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '16px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              bgcolor: 'grey',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 1,
              fontSize: '1rem',
            }}
          >
            {card.position_index}
          </Box>
          <Typography variant="string" sx={{ flexGrow: 1 }}>
            {card.alt}
          </Typography>
        </Box>
        {isHovered && (
          <>
            <Divider sx={{ bgcolor: 'white', width: '70%', ml: 6.5 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 6.5, mb: 6, paddingTop: 2 }}>
              <Link to={card.link} style={{ textDecoration: 'none', color: 'white' }}>
                <Typography variant="body1">More About</Typography>
              </Link>
              <ChevronRight fontSize="small" sx={{ ml: 1 }} />
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};

const Carousel = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState([]);
  const cardWidth = 327;
  const cardSpacing = 40;
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const visibleCards = isMobile ? 1 : isTablet ? 3 : 4;
  const containerRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Fetch data from API
  useEffect(() => {
    axios
      .get('https://4xdfart5e0.execute-api.ap-south-1.amazonaws.com/v1/getServiceCarouselDetailsDynamoDB')
      .then((response) => {
        const sortedData = response.data.sort((a, b) => a.position_index - b.position_index);
        setCards(sortedData);
      })
      .catch((error) => {
        console.error('Error fetching carousel data:', error);
      });
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - visibleCards));
  };

  const showLeftArrow = currentIndex > 0;
  const showRightArrow = currentIndex < cards.length - visibleCards;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe && currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        ref={containerRef}
        sx={{
          position: 'relative',
          width: 'auto',
          marginTop: isMobile ? 1 : 0,
          marginBottom: isMobile ? 1 : 0,
          marginLeft: {
            xs: 1,
            md: '20px',
            lg: '95px',
          },
          marginRight: isMobile ? 1 : 0,
          overflow: 'hidden',
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Box
          sx={{
            display: 'flex',
            transition: 'transform 0.3s ease-in-out',
            transform: `translateX(-${currentIndex * (cardWidth + cardSpacing)}px)`,
            gap: `${cardSpacing}px`,
          }}
        >
          {cards.map((card, index) => (
            <Box key={card.id} sx={{ flexShrink: 0, width: cardWidth }}>
              <CarouselCard
                card={card}
                isFullyVisible={index >= currentIndex && index < currentIndex + visibleCards}
                isOverlappingButton={
                  (showLeftArrow && showRightArrow && index === currentIndex) ||
                  (!showLeftArrow && showRightArrow && index === currentIndex + visibleCards - 1)
                }
                isMobile={isMobile}
              />
            </Box>
          ))}
        </Box>
        {!isMobile && showLeftArrow && (
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1,
              bgcolor: 'black',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.8)' },
              width: 40,
              height: 40,
            }}
          >
            <ChevronLeft />
          </IconButton>
        )}
        {!isMobile && showRightArrow && (
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1,
              bgcolor: 'black',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.8)' },
              width: 40,
              height: 40,
            }}
          >
            <ChevronRight />
          </IconButton>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Carousel;
