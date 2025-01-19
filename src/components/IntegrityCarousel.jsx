import { useState, useRef, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import '../styles.css';

const IntegrityCarousel = () => {
  const [slides, setSlides] = useState([]); // State to store the fetched slides
  const [activeIndex, setActiveIndex] = useState(0);
  const [updateEvent, setUpdateEvent] = useState(false);
  const [viewMode, setViewMode] = useState('desktop');
  const carouselRef = useRef(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 910) {
      setViewMode('mobile');
    } else if (window.innerWidth <= 1440) {
      setViewMode('tablet');
    } else {
      setViewMode('desktop');
    }
  };

  const handleAfterChange = (currentSlide) => {
    if (!updateEvent) setActiveIndex((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
  };

  // Fetch the slides data from API and sort by 'position' field
  const fetchSlidesData = async () => {
    try {
      const response = await axios.get('https://j00adwkd1b.execute-api.ap-south-1.amazonaws.com/v1/getAboutUsCarousel');
      if (response.data.status_code === 200) {
        const sortedSlides = response.data.data.sort((a, b) => a.position - b.position);
        setSlides(sortedSlides);
      }
    } catch (error) {
      console.error("Error fetching carousel data:", error);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Fetch carousel data when component mounts
    fetchSlidesData();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleEventUpdation = (index) => {
    setActiveIndex(index);
    setUpdateEvent(true);
    if (carouselRef.current) {
      carouselRef.current.goToSlide((index + 2) % slides.length);
    }
  };

  return (
    <section className="integrity-carousel-section">
      {viewMode !== 'desktop' ? (
        <div className="integrity-card-container">
          {slides.map((slide, index) => (
            <div key={index} className="integrity-card">
              <img src={slide.url} alt={slide.title} className="card-image" />
              <div className="card-description montserrat-regular">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="integrity-menu">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`integrity-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleEventUpdation(index)}
              >
                {slide.title}
                <hr />
              </div>
            ))}
          </div>
          <Carousel
            responsive={responsive}
            autoPlay={!updateEvent}
            autoPlaySpeed={3000}
            infinite
            arrows={false}
            containerClass="integrity-carousel"
            afterChange={handleAfterChange}
            customTransition="transform 500ms ease-in-out"
            keyBoardControl
            ref={carouselRef}
          >
            {slides.map((slide, index) => (
              <div key={index} className="carousel-slide">
                <img src={slide.url} alt={slide.title} className="carousel-image" />
                <div className="carousel-description">
                  <h2>{slide.title}</h2>
                  <p style={{ fontSize: '18px', lineHeight: '2.4rem' }}>{slide.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </>
      )}
    </section>
  );
};

export default IntegrityCarousel;
