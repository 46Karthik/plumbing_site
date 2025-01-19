import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Box, Typography, Grid, Button, Container, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import PhoneIcon from '../assets/img/footer_phone_logo.png';
import MailIcon from '../assets/img/footer_mail_logo.png';
import LocationIcon from '../assets/img/footer_map_logo.png';
import TwitterIcon from '../assets/img/a.svg';
import FacebookIcon from '../assets/img/b.svg';
import InstagramIcon from '../assets/img/c.svg';
import LinkedInIcon from '../assets/img/d.svg';
import SmallDivider from '../assets/img/footer_small_vertical_divider.png';
import LargeDivider from '../assets/img/footer_large_vertical_divider.png';
import HorizontalDivider from '../assets/img/footer_horizontal_divider.png';
import MapIcon from '../assets/img/footer_button_logo.png';
import electrapowerLogo from '../assets/img/logo_b.png';

const StyledTypography = styled(Typography)({
  '&.MuiTypography-root': {
    fontFamily: 'inherit',
    lineHeight: '1.5',
    marginBottom: '8px',
  },
});

const OrangeTypography = styled(StyledTypography)(({ theme }) => ({
  color: '#FF6B2B',
  fontSize: '0.875rem',
}));

const ContactInfoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '16px',
});

const IconColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: '16px',
  justifyContent: 'space-between',
  height: '144px',
});

const TextColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100px',
});

const IconWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
});

const Footer = () => {
  const [emailAdresses, setEmailAddresses] = useState([]);
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [address, setAddress] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    axios
      .get('https://lb0vi80xj8.execute-api.ap-south-1.amazonaws.com/v1/getEmailAddress')
      .then((response) => {
        if (response.data.status_code === 200) {
          console.log(response.data.data.id)
            setEmailAddresses(response.data.data.slice(0, 1));
               
        }
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get('https://7rj41dy3tc.execute-api.ap-south-1.amazonaws.com/v1/getContactNumber')
      .then((response) => {
        if (response.data.status_code === 200) {
          setPhoneNumbers(response.data.data.slice(0, 2));
        }
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get('https://as783pagq9.execute-api.ap-south-1.amazonaws.com/v1/getAddress')
      .then((response) => {
        if (response.data.status_code === 200) {
          setAddress(response.data.data.slice(0, 1));
        }
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get('https://1kwvd6de1e.execute-api.ap-south-1.amazonaws.com/v1/getSocialMedia')
      .then((response) => {
        if (response.data.status_code === 200) {
          setSocialLinks(response.data.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const splitAddress = (address) => {
    const addressParts = address.split(',');
    const companyName = addressParts[0].trim();
    const companyDescription = addressParts[1].trim();
    const addressLine = addressParts.slice(2, addressParts.length - 2).join(',').trim();
    const cityStateCountryPostal = addressParts.slice(-2).join(',').trim();

    return {
      companyName,
      companyDescription,
      addressLine,
      cityStateCountryPostal
    };
  };

  const getSocialIcon = (socialMedia) => {
    switch (socialMedia.toLowerCase()) {
      case 'linkedin':
        return LinkedInIcon;
      case 'facebook':
        return FacebookIcon;
      case 'instagram':
        return InstagramIcon;
      case 'x':
        return TwitterIcon;
      default:
        return null;
    }
  };

  const renderSocialMediaIcons = () => (
    <>
      <StyledTypography variant="body2" component="span" sx={{ mr: 2, display: { xs: 'inline', md: 'none' } }}>
        Connect with us
      </StyledTypography>
      {socialLinks.map((item) => {
        const icon = getSocialIcon(item.SocialMedia);
        return icon ? (
          <IconButton key={item.id} size="small" sx={{ color: 'white' }}>
            <a href={item.Link} target="_blank" rel="noopener noreferrer">
              <Box component="img" src={icon} alt={`${item.SocialMedia} Icon`} />
            </a>
          </IconButton>
        ) : null;
      })}
    </>
  );

  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', py: 4, width: '100%', boxSizing: 'border-box' }} className="montserrat-regular">
      <Container maxWidth="lg" sx={{ 
        px: { 
          xs: 1, 
          '@media (min-width: 910px) and (max-width: 1440px)': {
            px: 6,
          },
          lg: 0.5 
        } 
      }}>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={12} md={4} sx={{ width: '100%', boxSizing: 'border-box' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: { xs: 'center', md: 'flex-start' }, width: '100%', boxSizing: 'border-box' }}>
              <img 
                src={electrapowerLogo} 
                alt="Electrapower Engineering Logo" 
                style={{ width: '150px', height: 'auto', marginRight: '16px' }}
              />
            </Box>
            <StyledTypography variant="body2">
              Electra Power Engineering founded in 2013 is the brainchild of a group of skilled and experienced engineers who are proven game changers in the electrical engineering Industry.
            </StyledTypography>
          </Grid>

          <Grid item xs={12} md={1} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
            <img src={LargeDivider} style={{ margin: '0 8px', height: '100%' }} alt="Divider" />
          </Grid>

          <Box sx={{ my: 4, display: { xs: 'inline', md: 'none' } }}>
            <img src={HorizontalDivider} style={{ width: '100%' }} alt="Horizontal Divider" />
          </Box>

          <Grid item xs={12} md={3}>
            <ContactInfoContainer>
              <IconColumn>
                <IconWrapper>
                  <img src={PhoneIcon} alt="Phone Icon" />
                </IconWrapper>
                <IconWrapper>
                  <img src={MailIcon} alt="Mail Icon" />
                </IconWrapper>
              </IconColumn>
              <TextColumn>
                <Box>
                  <OrangeTypography variant="subtitle1" className="montserrat-medium">
                    Phone number
                  </OrangeTypography>
                  {
                    phoneNumbers.map((phoneObj) => (
                      <StyledTypography key={phoneObj.id} variant="body2"> {phoneObj.Contact} </StyledTypography>
                    ))
                  }
                </Box>
                
                <Box mt={4}>
                  <OrangeTypography variant="subtitle1" className="montserrat-medium">
                    For Enquiries
                  </OrangeTypography>
                  {
                    emailAdresses.map((emailObj) => (
                      <StyledTypography key={emailObj.id} variant='body2'>
                        {emailObj.email}
                      </StyledTypography>
                    ))
                  }
                </Box>
              </TextColumn>
            </ContactInfoContainer>
          </Grid>

          <Grid item xs={12} md={1} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
            <img src={LargeDivider} style={{ margin: '0 8px', height: '178px' }} alt="Divider" />
          </Grid>

          <Grid item xs={12} md={3} sx={{ textAlign: 'left' , mt:{xs:4, md:0}}} >
            <ContactInfoContainer>
              <IconWrapper sx={{ mr: 2 }}>
                <img src={LocationIcon} alt="Location Icon" />
              </IconWrapper>
              <Box>
                <OrangeTypography variant="subtitle1" className="montserrat-medium">
                  Address
                </OrangeTypography>
                {
                  address.map((addressObj) => {
                    const split = splitAddress(addressObj.address);
                    
                    return (
                      <>
                        <StyledTypography variant="body2">{split.companyName}</StyledTypography>
                        <StyledTypography variant="body2">{split.companyDescription}</StyledTypography>
                        <StyledTypography variant="body2">{split.addressLine}</StyledTypography>
                        <StyledTypography variant="body2" gutterBottom>{split.cityStateCountryPostal}</StyledTypography>
                      </>
                    );
                  })
                }
                <a href='https://maps.app.goo.gl/Yc7AaeZD7PgbSzwr6'>
                <Button 
                  variant="outlined" 
                  sx={{ 
                    borderColor: '#FF6B2B',
                    color: '#FF6B2B',
                    '&:hover': { backgroundColor: 'rgba(255, 107, 43, 0.1)' },
                    borderRadius: '50px', 
                    fontFamily: 'inherit',
                  }} 
                  className="montserrat-medium"
                  startIcon={<Box component="img" src={MapIcon} sx={{ color: '#FF6B2B', height: '24px' }} />}
                >
                  Locate in map
                </Button>
                </a>
              </Box>
            </ContactInfoContainer>
          </Grid>
        </Grid>

        <Box sx={{ my: 4, display: { xs: 'inline', md: 'none' } }}>
          <img src={HorizontalDivider} style={{ width: '100%' }} alt="Horizontal Divider" />
        </Box>

        <Grid item sx={{ display: { xs: 'block', md: 'none' }, paddingTop:2, paddingLeft:1 }}>
          {renderSocialMediaIcons()}
        </Grid>

        <Box sx={{mb:4, mt:2 }}>
          <img src={HorizontalDivider} style={{ width: '100%' }} alt="Horizontal Divider" />
        </Box>

        {/* <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Box component="nav" sx={{ display: 'flex', alignItems: 'center' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: "/aboutus" },
                { name: 'Services', path: "/services-design-consulting" },
                { name: 'Projects', path: '/portfolio-projects' }
              ].map((item, index) => (
                <React.Fragment key={item.name}>
                  <Button 
                    component={Link}
                    to={item.path}
                    sx={{ 
                      color: 'white', 
                      textTransform: 'none',
                      fontFamily: 'inherit',
                    }} 
                    className="montserrat-regular"
                  >
                    {item.name}
                  </Button>
                  {index < 3 && (
                    <img src={SmallDivider} style={{ margin: '0 8px' }} alt="Small Divider" />
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Grid>
          <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
            {renderSocialMediaIcons()}
          </Grid>
        </Grid> */}
      </Container>
    </Box>
  );
};

export default Footer;