import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import ServicePageText from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";
import Services from '../components/Services/Services';
import { Helmet } from 'react-helmet-async';
import axios from "axios";

function InstallationCommisioningService() {
  const [isMobile, setIsMobile] = useState(false);
  const [sections, setSections] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try{
          const response = await axios.get('https://tn962s9r5i.execute-api.ap-south-1.amazonaws.com/v1//getService?service=install-comm-service')
          const result = response.data;

          if (result.status_code == 200) {
            const sortData = result.data.sort((a, b) => {
                // Compare by position first
                if (a.position !== b.position) {
                    return a.position - b.position;
                }
                
                // If positions are the same, compare by updated_at
                const aUpdatedAt = a.updated_at ? new Date(a.updated_at).getTime() : 0;
                const bUpdatedAt = b.updated_at ? new Date(b.updated_at).getTime() : 0;

                return bUpdatedAt - aUpdatedAt; // Most recent first
            });

            setSections(sortData);
        } else {
            console.log(result.status_code);
        }
        } catch(error){
            console.error(error)
        }
    };

    fetchData()
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set the initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {isMobile
            ? "Electrical Installation & Commissioning | Electrapower Engineering"
            : "Electrical Installation & Commissioning | Electrapower Engineering"}
        </title>
        <meta
          name="description"
          content={
            isMobile
              ? "Need reliable electrical installations in Kerala? Electrapower Engineering provides HT/LT specialised installations, internal electrification & more!"
              : "Need reliable electrical installations in Kerala? Electrapower Engineering's skilled electricians handle HT/LT specialised installations, internal electrification & more!"
          }
        />
        <meta 
        name = "title"
        content = {isMobile
          ? "Electrical Installation & Commissioning | Electrapower Engineering"
          : "Electrical Installation & Commissioning | Electrapower Engineering"} 
        />
        <meta 
            name="keywords"
            content= "Electrapower Engineering,Electrapower Engineering Kerala ,Electrical Contractors , electrical, contractors ,Electrapower, Engineering, electrapower, engineering, electrapower engineering kerala, panel board, control systems, electrical panel, custom panel design, panel fabrication, installation, commissioning, PCC, MCC, generator control panel, AMF panel, PLC panel, Rittal panel, APFC panel, control desk, VFD panel, metering panel, bus duct system, synchronization panel, Kerala, Electrapower, electrical contractor"
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
                  "@type": "Service",
                  "serviceType": "Electrical Installation & Commissioning | Electrapower Engineering",
                  "provider": {
                    "@type": "Organization",
                    "name": "Electra Power",
                    "url": "https://electrapower.in/"
                  },
                  "url": "https://electrapower.in/services-installation-commisioning",
                  "description": "Need reliable electrical installations in Kerala? Electrapower Engineering's skilled electricians handle HT/LT specialised installations, internal electrification & more!"
              }
                                    
          )
          }
          
          </script>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Navbar />
      <div className="service-all-width">
        <ServicePageText />
        <section id="services">
          <ServicePageButton />
          <Services data={sections} />
        </section>
        <ServicePageBottomButton />
        <ServiceFooterCarousel />
        <Footer />
      </div>
    </>
  );
}

export default InstallationCommisioningService;
