import React, { useState, useEffect } from 'react';
import { useSprings, animated } from 'react-spring';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const springs = useSprings(
    images.length,
    images.map((_, i) => ({
      opacity: i === index ? 1 : 0.5,
      transform: `translateX(${(i - index) * (isMobile ? 100 : 250)}px)`,
      zIndex: i === index ? 2 : 1,
      width: isMobile
        ? (i === index ? '200px' : '150px')
        : (i === index ? '400px' : '250px'),
      height: isMobile
        ? (i === index ? '300px' : '225px')
        : (i === index ? '270px' : '170px'),
      borderRadius: '15px',
      marginLeft: i === index ? '0px' : '-20px',
    }))
  );

  return (
    <Box
      sx={{
        height: isMobile ? '300px' : '270px',
        width: '100%',
        position: 'relative',
        perspective: '1000px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {springs.map((props, i) => (
        <animated.div
          key={i}
          style={{
            ...props,
            position: 'absolute',
            backgroundImage: `url(${images[i]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'all 0.5s ease-in-out',
          }}
        />
      ))}
    </Box>
  );
};

export default Carousel;