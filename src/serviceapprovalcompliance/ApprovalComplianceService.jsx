import {useState,useEffect} from 'react';
import Navbar from "../components/Navbar";
import ServicePageText  from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
import axios from "axios";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";
import Services from '../components/Services/Services';
import { Helmet } from 'react-helmet-async';

 

function MaintenaceRepairService () {
    const [isMobile, setIsMobile] = useState(false);
    const [sections, setSections] = useState([])

    useEffect(() => {

      const fetchData = async () => {
        try{
            const response = await axios.get('https://tn962s9r5i.execute-api.ap-south-1.amazonaws.com/v1//getService?service=approval-compliance-service')
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
    return(
        <>
        <Helmet>
          <title>
            {isMobile
              ? "KSEB & Electrical Inspectorate Approvals on time | HT/LT Projects"
              : "KSEB & Electrical Inspectorate Approvals on time | HT/LT Projects"}
          </title>
          <meta
            name="description"
            content={
              isMobile
                ? "Electrapower Engineering handle Faster KSEB & Electrical Inspectorate liaisoning, installation approvals."
                : "Simplify electrical approvals in Kerala with Electrapower Engineering. We handle KSEB & Electrical Inspectorate liaisoning, installation approvals & more!"
            }
          />
          <meta 
          name = "title"
          content = {isMobile
            ? "KSEB & Electrical Inspectorate Approvals on time | HT/LT Projects"
            : "KSEB & Electrical Inspectorate Approvals on time | HT/LT Projects"}
          />
          <meta 
              name="keywords"
              content= "Electrapower Engineering,Electrapower Engineering Kerala ,Electrical Contractors , electrical, contractors ,Electrapower, Engineering, electrapower, engineering, electrapower engineering kerala, statutory approvals, compliance, electrical approvals, KSEB, Electrical Inspectorate, earthing design, short circuit design, installation approvals, solar plant approvals, energization sanction, Kerala, Electrapower, electrical contractor"
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
                  "serviceType": "KSEB & Electrical Inspectorate Approvals on time | HT/LT Projects",
                  "provider": {
                    "@type": "Organization",
                    "name": "Electra Power",
                    "url": "https://electrapower.in/"
                  },
                  "url": "https://electrapower.in/services-statutory-approvals",
                  "description": "Electrapower Engineering handle Faster KSEB & Electrical Inspectorate liaisoning, installation approvals."
              }
                                    
          )
          }
            
          </script>
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={window.location.href} />
        </Helmet>
        <Navbar/>
        <div className="service-all-width">
            <ServicePageText/>
            <section id='services'>
            <ServicePageButton />
            <Services data={sections} />
            </section>
            <ServicePageBottomButton />
            <ServiceFooterCarousel/>
            <Footer/>
        </div>
        </>
 
    )
}

export default MaintenaceRepairService;