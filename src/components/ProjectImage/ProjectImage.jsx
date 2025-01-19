import React, {useEffect, useRef} from 'react';
import Slider from "react-slick";

const ProjectImage = ({ images }) => {
    const imageRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        imageRefs.current.forEach(img => {
            if (img) observer.observe(img);
        });

        return () => {
            imageRefs.current.forEach(img => {
                if (img) observer.unobserve(img);
            });
        };
    }, [images]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <>
        <div className="project-images   gap-5 my-10">
            {images.map((e, i) =>
                <img src={e.url} alt={e.alt} key={i} className="project-image rounded-[14px]" />
            )}
        </div>
        <div className="project-images-slider">
          {
            images.length > 1 ?    <Slider {...settings}>
            {images.map((e, i) =>
                    <img src={e.url} alt={e.alt} key={i} className="project-image rounded-[14px]" />
                )}
            </Slider> :  images.map((e, i) =>
                    <img src={e.url} alt={e.alt} key={i} className="project-image rounded-[14px]" 
            />
                )
          }  
     
        </div>
        </>

    );
}

export default ProjectImage;
