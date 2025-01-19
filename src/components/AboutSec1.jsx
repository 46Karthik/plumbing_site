import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css'; // Ensure to import your CSS file

function AboutSec1() {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await axios.get('https://vkflopezmi.execute-api.ap-south-1.amazonaws.com/v1/getAboutUsHeaderImage');
        if (response.data.status_code === 200) {
          setImageUrl(response.data.message[0]); // Set the image URL from the API response
        }
      } catch (error) {
        console.error('Error fetching the image URL:', error);
      } finally {
        setLoading(false); // Set loading to false after the API call
      }
    };

    fetchImageUrl();
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <div className="aboutus-container">
        <div className="aboutus-image-section">
          {loading ? (
            <p>Loading...</p> // Display loading text while fetching
          ) : (
            <img 
              src={imageUrl} 
              alt="A smiling electrical engineer in uniform gives a thumbs up, conveying confidence and optimism about the future of Electrapower Engineering" 
              className="aboutus-image" 
            />
          )}
        </div>
        <div className="aboutus-text-section">
          <h3 className="aboutus-heading montserrat-medium">ELECTRA POWER ENGINEERING</h3>
          <h1 className="aboutus-title text-orange">
            <span className="text-bluetext">Energise A</span> Powerful <span className='text-black'>Future</span>
          </h1>
          <p className="aboutus-paragraph montserrat-regular">
            Established in 2013, We are an ‘A’ grade HT electrical contracting firm based out of Kerala built on a legacy of trust and technical excellence. We are a team of seasoned technocrats, wielding a wealth of experience and knowledge to deliver comprehensive electrical solutions for projects of any scale.
          </p>
          <p className="aboutus-paragraph montserrat-regular">
            Our expertise encompasses every stage of your electrification journey – from conceptual design and meticulous planning to flawless execution with robust liaisoning. We operate with a customer-centric approach, prioritising clear communication and a deep understanding of your unique needs.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutSec1;
