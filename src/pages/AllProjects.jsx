import {useState, useEffect} from 'react';
import axios from "axios";
import { Helmet } from 'react-helmet-async';
import Navbar from "../components/Navbar";
import Header from '../components/Header/Header';
import ProjectRow from '../components/ProjectRow/ProjectRow';
import "./AllProjects.css";
import Connect from "../components/Connect/Connect";
import Footer from "../components/Footer";

const AllProjects = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [data, setData] = useState([]);   

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('https://jqghdcmvi0.execute-api.ap-south-1.amazonaws.com/v1/getAllProjects');
                const result = response.data;
    
                if (result.status_code === 200) {
                    // Sort the data by project_position
                    const sortedData = result.data.sort((a, b) => a.project_position - b.project_position);
                    setData(sortedData);  // Set the sorted data in state
                } else {
                    console.error('Error: API returned a status_code:', result.status_code);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
        
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
                        ? "Completed Electrical Projects | Electrapower Engineering, Kerala"
                        : "Completed Electrical Projects | Electrapower Engineering, Kerala"}
                </title>
                <meta
                    name="description"
                    content={
                        isMobile
                            ? "Explore Electrapower's diverse portfolio of completed electrical projects in Kerala. Witness our commitment to quality, innovation & client satisfaction stories."
                            : "Explore Electrapower's diverse portfolio of completed electrical projects in Kerala. Witness our commitment to quality, innovation & client satisfaction stories."
                    }
                />
                <meta 
                name = "title"
                content = {isMobile
                    ? "Completed Electrical Projects | Electrapower Engineering, Kerala"
                    : "Completed Electrical Projects | Electrapower Engineering, Kerala"}
                />
                <meta 
                    name="keywords"
                    content= "Electrapower Engineering,Electrapower Engineering Kerala ,Electrical Contractors , electrical, contractors ,Electrapower, Engineering, electrapower, engineering, electrapower engineering kerala, electrical projects, electrical, projects, electrical projects kerala, kia, hhys inframart, nippon toyota, luxon, commercial projects, commercial"
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
                            "@type": "WebPage",
                            "url": "https://electrapower.in/all-projects",
                            "name": "All Projects",
                            "description": "Explore Electrapower's diverse portfolio of completed electrical projects in Kerala. Witness our commitment to quality, innovation & client satisfaction stories."
                          }
                          
                          
                    )
                }
                </script>
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
        <Navbar />
        <div className="allprojects">
           
            <Header />
            <div className="wrapper">
                <ProjectRow data={data} />
            </div>
            <Connect />
            <Footer />
        </div>
        </>
    );
}

export default AllProjects;


