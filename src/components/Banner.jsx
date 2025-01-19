import axios from 'axios';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMediaQuery } from "@mui/material";
import styled from 'styled-components';
import 'react-multi-carousel/lib/styles.css';

// Styled components for banner container and image
const BannerContainer = styled.div`
  width: 100%;
  margin-top: 2rem; // Adjust this value as needed for desktop

  @media (max-width: 960px) {
    margin-top: 0; // Remove top margin for mobile
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (max-width: 960px) {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`;

const StyledCarousel = styled(Carousel)`
  .react-multi-carousel-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  }
};

function Banner() {
  const isMobile = useMediaQuery("(max-width:960px)");
  const [webImages, setWebImages] = useState([]);
  const [mobileImages, setMobileImages] = useState([]);

  // Fetch images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://1a2fagymd7.execute-api.ap-south-1.amazonaws.com/v2/fetchBannerImageDetails');
        const imageData = response.data;

        // Filter web and mobile images based on the mode field
        const webImages = imageData
          .filter(img => img.mode === 'Desktop')
          .sort((a, b) => a.position_index - b.position_index);

        const mobileImages = imageData
          .filter(img => img.mode === 'Mobile')
          .sort((a, b) => a.position_index - b.position_index);

        // Set state
        setWebImages(webImages);
        setMobileImages(mobileImages);
      } catch (error) {
        console.error("Error fetching images from API:", error);
      }
    };

    fetchImages();
  }, []);

  const images = isMobile ? mobileImages : webImages;

  return (
    <BannerContainer>
      <StyledCarousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={7000}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={2000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        arrows={false}
        showDots={false}
        pauseOnHover={false}
        rtl={true}
      >
        {images.map((image, index) => (
          <div key={index}>
            <Link to={image.link}>
              <BannerImage 
                src={image.image_url} 
                alt={image.alt}
              />
            </Link>
          </div>
        ))}
      </StyledCarousel>
    </BannerContainer>
  );
}

export default Banner;
