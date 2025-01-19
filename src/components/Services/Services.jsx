import { useEffect, useState, useRef } from 'react';
import './Services.css';

const Services = ({ data, panel }) => {
    const [toggle, setToggle] = useState({
        check: false,
        index: 0
    });
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
        data.map((e, i) => {
            return (
                <div key={i} ref={(el) => (elementsRef.current[i] = el)} className={`services ${i % 2 !== 0 && 'services-row-revese '} ${i === 3 && panel && 'service-panel-fix'}`}  >
                    <div className={`services-images ${i % 2 !== 0 && 'services-row-revese'}`}>
                        {e.images.map((imgData, imgIndex) => {
                            return (<img src={imgData.src} alt={imgData.alt || `Service image ${imgIndex + 1}`} className='service-image' key={imgIndex} />)
                        })}
                    </div>
                    <div className='services-info'>
                        <div className="services-header" style={{ gap: e.heading.length > 30 && '30px' }}  >
                            <h2 className={'montserrat-regular '} style={{ fontSize: e.heading.length > 30 && '16px', wordSpacing: e.heading.length > 30 && '-0.01em' }}>{e.heading}</h2>
                            <span>
                                <svg className='services-svg-lg' width="114" height="6" viewBox="0 0 114 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.21" d="M109 3.49999L114 5.88674L114 0.113239L109 2.49999L109 3.49999ZM4.37114e-08 3.5L109.5 3.49999L109.5 2.49999L-4.37114e-08 2.5L4.37114e-08 3.5Z" fill="#202632" />
                                </svg>
                                <svg className='services-svg-mb' width="65" height="6" viewBox="0 0 65 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.21" d="M60 3.49999L65 5.88675L65 0.113243L60 2.49999L60 3.49999ZM4.37114e-08 3.5L60.5 3.49999L60.5 2.49999L-4.37114e-08 2.5L4.37114e-08 3.5Z" fill="#202632" />
                                </svg>

                            </span>
                            <p  >0{i + 1}</p>
                        </div>
                        <p className='services-description'>
                            {e.description}
                        </p>
                        {
                            e.bullets && e.bullets.length > 0 &&
                            <div style={{ display: i === toggle.index && toggle.check ? 'block' : 'none' }}>
                                {e.bullets_heading && e.bullets && <h4 className='services-list-head'>{e.bullets_heading}:</h4>}
                                <ul className='services-list'>
                                    {e.bullets.map((e, bulletIndex) => <li key={bulletIndex}>{e}</li>)}
                                </ul>
                            </div>
                        }
                        {e.bullets && e.bullets.length > 0 && !panel && <button onClick={() => setToggle((e) => ({ ...e, check: !toggle.check, index: i }))}>{i == toggle.index && toggle.check ? 'Read Less' : "Read More"}</button>}
                    </div>
                    {i === 3 && panel && <div className='service-panel-list'>
                        <ul className='service-panel-list-1'>
                            {e.bullets.slice(0, 6).map((e, panelIndex) => {
                                return <li key={panelIndex} >{e}</li>
                            })}
                        </ul>
                        <ul className='service-panel-list-1'>
                            {e.bullets.slice(6, e.bullets.length).map((e, panelIndex2) => {
                                return <li key={panelIndex2} >{e}</li>
                            })}
                        </ul>
                    </div>
                    }
                </div>

            );
        })
    )


}

export default Services;
