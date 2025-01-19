import React, { useEffect, useRef } from 'react';
import ProjectTitle from '../ProjectTitle/ProjectTitle';
import ProjectImage from '../ProjectImage/ProjectImage';
import ProjectDescription from '../ProjectDescription/ProjectDescription';
import ProjectHighlights from '../ProjectHighlights/ProjectHighlights';
import ProjectTestimonial from '../ProjectTestimonial/ProjectTestimonial';
import ProjectHeader from '../ProjectHeader/ProjectHeader';
import "./ProjectInfo.css";

const ProjectInfo = ({ data }) => {
    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.1 });

        elementsRef.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => {
            elementsRef.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        }
    }, [data]);

    return (
        <>
            <ProjectHeader />
            {data.map((e, i) => (
                <section
                    id={`${i}`}
                    key={i}
                    ref={el => elementsRef.current[i] = el}
                    className="project-section"
                >
                    <div className="projectinfo">
                        <svg className="border-top-svg" width="1650" height="1" viewBox="0 0 1650 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.35" d="M0 0.5H1650" stroke="black" strokeDasharray="6 6" />
                        </svg>
                        <svg width="280" className="border-top-sm" height="2" viewBox="0 0 280 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.39" d="M0 1H320" stroke="black" strokeWidth="1" strokeDasharray="3 3" />
                        </svg>

                        <ProjectTitle index={i} title={e.title} />
                        <ProjectImage images={e.images} />
                        <ProjectDescription description_one={e.description_one} description_two={e.description_two} />
                        <ProjectHighlights highlights={e.highlights} />
                        <ProjectTestimonial image={e.testimonial_logo} alt={e.testimonial_logo_alt} title={e.testimonial_head} info={e.testimonial_info} />
                    </div>
                </section>
            ))}
        </>
    );
};

export default ProjectInfo;
