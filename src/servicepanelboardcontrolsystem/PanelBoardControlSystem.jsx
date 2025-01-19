import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import ServicePageText from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
import axios from "axios";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';
import Services from '../components/Services/Services';

function PanelBoardControlSystemService() {
  const [isMobile, setIsMobile] = useState(false);
  const [sections, setSections] = useState([])

  useEffect(() => {
      const fetchData = async () => {
        try{
            const response = await axios.get('https://tn962s9r5i.execute-api.ap-south-1.amazonaws.com/v1//getService?service=panel-board-control-service')
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
            ? "Electrical Panels & Control Systems in Kerala | Design & Fabrication"
            : "Electrical Panels & Control Systems in Kerala | Design & Fabrication"}
        </title>
        <meta
          name="description"
          content={
            isMobile
              ? "Electrapower Engineering designs, fabricates & installs custom panel boards and control systems for your HT/LT projects."
              : "Electrapower Engineering designs, fabricates & installs custom panel boards and control systems in Kerala. Expert solutions for optimal power management & control."
          }
        />
        <meta 
        name = "title"
        content = {isMobile
          ? "Electrical Panels & Control Systems in Kerala | Design & Fabrication"
          : "Electrical Panels & Control Systems in Kerala | Design & Fabrication"}
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
                "serviceType": "Electrical Panels & Control Systems in Kerala | Design & Fabrication",
                "provider": {
                  "@type": "Organization",
                  "name": "Electra Power",
                  "url": "https://electrapower.in/"
                },
                "url": "https://electrapower.in/services-panelboard-control-systems",
                "description": "Electrapower Engineering designs, fabricates & installs custom panel boards and control systems for your HT/LT projects."
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
          <Services data={sections} panel={true} />
          <ServicePageBottomButton />
        </section>
        <ServiceFooterCarousel />
        <Footer />
      </div>
    </>
  );
}

export default PanelBoardControlSystemService;
