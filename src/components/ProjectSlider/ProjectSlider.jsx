import Carousel from 'react-multi-carousel';
import "./ProjectSlider.css";




const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 1,
    partialVisibilityGutter: 350
  },
  
  tablet: {
    breakpoint: { max: 1200, min: 788 },
    items: 1,
    partialVisibilityGutter: 200
  },
  tablet3: {
    breakpoint: { max: 900, min: 768 },
    items: 1,
    partialVisibilityGutter: 0
  },
  tablet2 : {
    breakpoint: { max: 788, min: 464 },
    items: 1,
    partialVisibilityGutter: 0
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const ProjectSlider = ({ images }) => {

  return (
    <>
      <div className="carousel-container toggle-1">
        <Carousel partialVisible={true} responsive={responsive}>
          {
            images.map((element, index) => {
              return (
                <div className='slider-card' key={index}>
                  {/* <div style={{backgroundImage : `url(${element.image_url})`}}  className='slider-image' > 
                  </div> */}
                  <img src={element.image_url} alt={element.title || "default alt text"} className='slider-image'/>
                  <div className="slider-rectangle  px-5 ">
                    <span className='slider-index flex justify-center items-center'>
                      {index + 1}
                    </span>
                    <p className="slider-text">
                      {element.title}
                    </p>
                  </div>
                </div>
              )
            })
          }

        </Carousel>
      </div>
      <div className='toggle-2 flex flex-col items-center gap-6'>
        {
          images.map((element, index) => {
            return (
              <div className='slider-card'  key={index}>
                <img src={element.image_url} alt={element.title} className='slider-image' />
                <div className="slider-rectangle flex   items-center gap-5 px-5">
                  <span className='slider-index flex justify-center items-center'>
                    {index + 1}
                  </span>
                  <p className="slider-text" style={{fontSize : element.title.length > 22 && '12px'}}>
                    {element.title}
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default ProjectSlider;
