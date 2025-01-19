import React from 'react';
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#ffffff',
  margin: '20px auto',
  [theme.breakpoints.up('lg')]: { // Changed from 'md' to 'lg' for desktop
    width: '941px',
    minHeight: '215px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [theme.breakpoints.down('lg')]: { // Changed from 'md' to 'lg' for tablet and mobile
    width: '100%',
    minHeight: '256px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
  },
}));

const ServiceComponent = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg')); // New breakpoint for desktop

  return (
    <StyledBox>
      <Typography
        variant="subtitle1"
        component="h2"
        sx={{
          textTransform: 'uppercase',
          mb: 2,
          fontFamily: 'Montserrat, sans-serif',
          textAlign: isDesktop ? 'center' : 'left',
          color: '#666',
          fontSize: isDesktop ? '1rem' : '0.8rem',
        }}
      >
        Our Services
      </Typography>
      <Typography
        variant={isDesktop ? 'h3' : 'h4'}
        component="h1"
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          mb: 2,
          textAlign: isDesktop ? 'center' : 'left',
          fontSize: isDesktop ? '2.5rem' : '1.5rem',
        }}
      >
        <span style={{ color: '#FF6B00' }}>Shaping</span>{' '}
        <span style={{ color: '#0080FF' }}>the world with</span>
      </Typography>
      <Typography
        variant={isDesktop ? 'h3' : 'h4'}
        component="h1"
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          mb: 2,
          textAlign: isDesktop ? 'center' : 'left',
          fontSize: isDesktop ? '2.5rem' : '1.5rem',
        }}
      >
        electrical expertise
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          textAlign: isDesktop ? 'center' : 'left',
          fontSize: isDesktop ? '1rem' : '0.9rem',
        }}
      >
        We provide comprehensive electrical solutions, from custom turnkey projects to complex control systems. Our services
        include seamless installation, proactive maintenance, and efficient regulatory approvals, ensuring full compliance.
        We are your one-stop point for all electrical needs, delivering end-to-end excellence.
      </Typography>
    </StyledBox>
  );
};

export default ServiceComponent;