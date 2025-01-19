import { useState, useRef, useEffect } from "react";
import AboutSec1 from "../components/AboutSec1";
import Navbar from "../components/Navbar";
import WhyChoose from "../components/WhyChoose";
import OurTeam from "../components/OurTeam";
import OurPeople from "../components/OurPeople";
import IntegrityCarousel from "../components/IntegrityCarousel";
import PartnerSection from "../components/PartnerSection";
import Footer from "../components/Footer";
import SectionComponent from "../components/SectionComponent";
import { Helmet } from "react-helmet-async";

function Aboutus() {
  const rowRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check for screen size
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    rowRefs.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => {
      rowRefs.current.forEach((row) => {
        if (row) observer.unobserve(row);
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {isMobile
            ? "Our Story & Expertise | Electrapower Engineering, Kochi"
            : "Our Story & Expertise | Electrapower Engineering, Kochi"}
        </title>
        <meta
          name="description"
          content={
            isMobile
              ? "Discover why Kerala businesses choose Electrapower Engineering for their HT/LT electrical projects."
              : "Discover why Kerala businesses choose Electrapower Engineering for their HT/LT electrical projects. Expert solutions, proven track record. Know more."
          }
        />
        <meta 
        name = "title"
        content = {isMobile
          ? "Our Story & Expertise | Electrapower Engineering, Kochi"
          : "Our Story & Expertise | Electrapower Engineering, Kochi"}
        />
        <meta 
        name="keywords"
        content= "Electrapower Engineering, Electrapower, Engineering, Our Story, About, Team, People"
      />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-MGGQC38182"></script>
      <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MGGQC38182');
          `}
      </script>
      <script type="application/ld+json">
        {
          JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "AboutusPage",
              "name": "Our Story & Expertise | Electrapower Engineering, Kochi",
              "url": "https://electrapower.in/aboutus"
            }
            
          )
        }
        
        </script>
      <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Navbar />
      <div className="aboutus">
        <div ref={(el) => (rowRefs.current[0] = el)}>
          <AboutSec1 />
        </div>
        <div ref={(el) => (rowRefs.current[1] = el)}>
          <SectionComponent />
        </div>
        <div ref={(el) => (rowRefs.current[2] = el)}>
          <WhyChoose />
        </div>
        <div ref={(el) => (rowRefs.current[3] = el)}>
          <OurTeam />
        </div>
        <div ref={(el) => (rowRefs.current[4] = el)}>
          <OurPeople />
        </div>
        <div ref={(el) => (rowRefs.current[5] = el)}>
          <IntegrityCarousel />
        </div>
        <div ref={(el) => (rowRefs.current[6] = el)}>
          <PartnerSection />
        </div>
        <div ref={(el) => (rowRefs.current[7] = el)}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Aboutus;
