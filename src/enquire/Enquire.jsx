import {useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ContactInfo from '../components/ContactInfo'
import WorkTogetherForm from '../components/WorkTogetherForm'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import { Helmet } from 'react-helmet-async'

function Enquire() {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    // Set the initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>
            {isMobile
                ? "Contact Electrapower Engineering, A grade Electrical Contractor | Kerala"
                : "Contact Electrapower Engineering, A grade Electrical Contractor | Kerala"}
        </title>
        <meta
            name="description"
            content={
                isMobile
                    ? "Need expert electrical solutions in Kerala? Contact Electrapower Engineering today for a free consultation & quote. We're ready to power your next project!"
                    : "Need expert electrical solutions in Kerala? Contact Electrapower Engineering today for a free consultation & quote. We're ready to power your next project!"
            }
        />
        <meta 
        name = "title"
        content = {isMobile
          ? "Contact Electrapower Engineering, A grade Electrical Contractor | Kerala"
          : "Contact Electrapower Engineering, A grade Electrical Contractor | Kerala"}
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
                "@type": "ContactPage",
                "url": "https://electrapower.in/contactus",
                "name": "Contact Us",
                "description": "Need expert electrical solutions in Kerala? Contact Electrapower Engineering today for a free consultation & quote. We're ready to power your next project!"
              }             
            )
        }
        </script>
        <link rel="canonical" href={window.location.href} />
        <meta 
          name="keywords"
          content= "Electrapower Engineering, Electrapower, Engineering, electrapower, engineering, enquire, contact, energy management systems (EMS), power quality analysis, automation, control systems, building management systems (BMS), electrical safety training, electrical safety audits, Kerala, Electrapower, electrical contractor"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div>
        <Navbar/>
        <div id="contactInfo">
          <ContactInfo/>
        </div>
        <div id="enquire">
          <WorkTogetherForm/>
        </div>
        <FAQ/>
        <Footer/>
      </div>
    </>
  )
}

export default Enquire