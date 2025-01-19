import {useState, useEffect} from 'react';
import axios from "axios";
import "./ProjectSectorial.css";
import Navbar from '../components/Navbar';
import ProjectInfo from '../components/ProjectInfo/ProjectInfo';
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';


const ProjectSectorial = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [data, setData] = useState([]); 
    
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('https://syyfm3xz1k.execute-api.ap-south-1.amazonaws.com/v1/getPortfolioProject');
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

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
        <Helmet>
                <title>
                    {isMobile
                        ? "Electrical Projects Showcase | Kerala's Top Contractor"
                        : "Electrical Projects Showcase | Kerala's Top Contractor"}
                </title>
                <meta
                    name="description"
                    content={
                        isMobile
                            ? "Electrapower Engineering powers Kerala's businesses. Our portfolio showcases successful projects across various industries, including India's largest Kia EV charging station."
                            : "Electrapower Engineering powers Kerala's businesses. Our portfolio showcases successful projects across various industries, including India's largest Kia EV charging station."
                    }
                />
                <meta 
                name = "title"
                content = {isMobile
                    ? "Electrical Projects Showcase | Kerala's Top Contractor"
                    : "Electrical Projects Showcase | Kerala's Top Contractor"}
                />
                <meta 
                    name="keywords"
                    content= "Electrapower Engineering,Electrapower Engineering Kerala ,Electrical Contractors , electrical, contractors ,Electrapower, Engineering, electrapower, engineering, electrapower engineering kerala, electrical projects, electrical, projects, electrical projects kerala, kia, hhys inframart, nippon toyota, luxon, commercial projects, commercial, rds "
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
                            "url": "https://electrapower.in/portfolio-projects",
                            "name": "Portfolio Projects",
                            "description": "Electrapower Engineering powers Kerala's businesses. Our portfolio showcases successful projects across various industries, including India's largest Kia EV charging station."
                          }
                          
                    )
                }
                </script>
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
        <Navbar />
        <div className="project-sectorial">
            <ProjectInfo data={data} />
            <Footer />
        </div>
        </>

    );
}

export default ProjectSectorial;
