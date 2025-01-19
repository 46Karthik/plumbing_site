import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import ImageSlider from "../components/ImageSlider";
import About from "../components/About";
import Vision from "../components/Vision";
import SuccessCards from "../components/SuccessCards";
import HomePortfolio from "../components/HomePortfolio";
import HomeClient from "../components/HomeClient";
import HomeTestimonial from "../components/HomeTestimonials";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen width is less than or equal to 768px for mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {isMobile
            ? "A Grade Electrical Contractors in Kerala | Electrapower Engineering"
            : "A Grade Electrical Contractors in Kerala | Electrapower Engineering"}
        </title>
        <meta
          name="description"
          content={
            isMobile
              ? "Leading A-grade Electrical contractors in Kochi. HT/LT installations, Panel Boards, statutory approval & more"
              : "Kerala's leading A-grade electrical contractors based in Kochi. Experts in HT/LT installations, Panel Board fabrication, statutory approvals & More."
          }
        />
        <meta 
        name = "title"
        content = {isMobile
          ? "A Grade Electrical Contractors in Kerala | Electrapower Engineering"
          : "A Grade Electrical Contractors in Kerala | Electrapower Engineering"}
        />
        <meta 
        name="keywords"
        content= "Electrapower Engineering,Electrapower Engineering Kerala ,Electrical Contractors , electrical, contractors ,Electrapower, Engineering, electrapower, engineering, electrapower engineering kerala, Home, Design and Consulting, panel board, control systems, electrical panel, custom panel design, panel fabrication, installation, commissioning, PCC, MCC, generator control panel, AMF panel, PLC panel, Rittal panel, APFC panel, control desk, VFD panel, metering panel, bus duct system, synchronization panel, Kerala, Electrapower, electrical contractor"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
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
              "@type": "Organization",
              "name": "Electra Power",
              "url": "https://electrapower.in/",
              "sameAs": [
                'https://www.linkedin.com/company/electrapower-engineering',
                'https://www.facebook.com/ElectrapowerEngineering/',
                'https://www.instagram.com/electrapowerengineering/',
                'https://twitter.com/electrapowereng'
              ]
            }
            
          )
        }
        
        </script>

      </Helmet>
      <Navbar />
      <div className="home">
        <Banner />
        <Hero />
        <ImageSlider />
        <About />
        <Vision />
        <SuccessCards />
        <HomePortfolio />
        <HomeClient />
        <HomeTestimonial />
        <Connect />
        <Footer />
      </div>
    </>
  );
}

export default Home;
