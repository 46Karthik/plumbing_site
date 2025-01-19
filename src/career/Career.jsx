import Navbar from '../components/Navbar'
import CareerHeader from '../components/CareerHeader'
import JobApplication from '../components/JobApplication'
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

function Career() {
  return (
    <>
    <Helmet>
      <title>
      Electrapower Engineering Careers: Join Our Team for a Powerful Future
      </title>
      <meta 
        name = "description"
        content = "Explore exciting career opportunities at Electrapower Engineering, a leading 'A' grade electrical engineering and contracting company in Kerala"
      />
      <meta 
        name="keywords"
        content= "Electrapower, Electrapower Engineering,Jobs, Electrical, Engineering, Contractor"
      />
      <meta name = "title" content = "Electrapower Engineering Careers: Join Our Team for a Powerful Future"/>
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Electrapower Engineering" />
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
                "@type": "WebPage",
                "url": "https://electrapower.in/careers",
                "name": "Careers at Electra Power",
                "description": "Explore exciting career opportunities at Electrapower Engineering, a leading 'A' grade electrical engineering and contracting company in Kerala."
              }
                          
            )
        }
        </script>
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
    <div className='careers-container'>
    <Navbar/>
        <CareerHeader/>
        <JobApplication/>
        <Footer/>
    </div>
        
    </>
  )
}

export default Career