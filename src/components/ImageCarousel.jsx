import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';
import '../styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const images = [
  { src: img1, alt: 'Electrapower Engineering: The illuminated heart of industry, showcasing the vast energy demands that power modern operations' },
  { src: img2, alt: 'Electrapower Engineering: Close-up view of high-voltage electrical equipment showcasing the intricacies of power transmission infrastructure.' },
  { src: img3, alt: 'Electrapower Engineering: A confident electrician gives a thumbs-up from a worksite, demonstrating pride in their work and expertise' },
];

const ImageCarousel = () => {
  return (
    <div className="slider-container">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        arrows={false}
        showDots={false}
        pauseOnHover={false}
        rtl={false}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image.src} alt={image.alt} className="slider-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;