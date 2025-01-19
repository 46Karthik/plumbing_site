import React, { useEffect, useRef } from 'react';
import "./ProjectHighlights.css";

const ProjectHighlights = ({ highlights }) => {

  const listRef = useRef(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    let delay = 0;
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate');
            entry.target.classList.add('animate-color');
          }, delay);
    
          delay += 1000;
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const listItems = listRef.current.querySelectorAll('li');
    listItems.forEach(item => observer.observe(item));

    return () => {
      listItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="project-highlights h-auto">
      <div className="flex flex-row items-center gap-5">
        <svg width="45" height="2" viewBox="0 0 45 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.19" d="M0 1L45 1" stroke="#F8753C" strokeWidth="2" />
        </svg>
        <span className="text-orangetext text-2xl tracking-wide font-bold">
          Projects Highlights
        </span>
      </div>
      <div>
        <ul className="project-highlight-list h-auto montserrat-regular" ref={listRef}>
          {
            highlights.map((e, i) => {
              return (
                <li key={i}>
                  <h4 className="text-xl tracking-wide uppercase my-5">{e.heading}</h4>
                  <p className="text-base tracking-wide">{e.info}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default ProjectHighlights;
