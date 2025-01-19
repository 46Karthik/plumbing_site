import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css';
import img1 from '../assets/img/chaticon.svg';
import img2 from '../assets/img/headoff.svg';
import img3 from '../assets/img/loc.svg';

const ContactInfo = () => {
  const [emailAddresses, setEmailAddresses] = useState([]);
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    // Fetch email addresses from the API
    axios
      .get('https://lb0vi80xj8.execute-api.ap-south-1.amazonaws.com/v1/getEmailAddress')
      .then((response) => {
        if (response.data.status_code === 200) {
          setEmailAddresses(response.data.data); // Store email addresses in state
        }
      })
      .catch((error) => {
        console.error('Error fetching email addresses:', error);
      });

    // Fetch phone numbers from the API
    axios
      .get('https://7rj41dy3tc.execute-api.ap-south-1.amazonaws.com/v1/getContactNumber')
      .then((response) => {
        if (response.data.status_code === 200) {
          setPhoneNumbers(response.data.data); // Store phone numbers in state
        }
      })
      .catch((error) => {
        console.error('Error fetching phone numbers:', error);
      });

    // Fetch addresses from the API
    axios
      .get('https://as783pagq9.execute-api.ap-south-1.amazonaws.com/v1/getAddress')
      .then((response) => {
        if (response.data.status_code === 200) {
          setAddresses(response.data.data); // Store addresses in state
        }
      })
      .catch((error) => {
        console.error('Error fetching addresses:', error);
      });
  }, []);

  const splitAddress = (address) => {
    const addressParts = address.split(',');
    
    // First line: company name (everything before the first comma)
    const companyName = addressParts[0].trim();

    // Second line: company description (everything between the first and second commas)
    const companyDescription = addressParts[1].trim();

    // Third line: address (everything between the second comma and the last comma before the city)
    const addressLine = addressParts.slice(2, addressParts.length - 2).join(',').trim();

    // Fourth line: city, state, country, postal code (last two parts)
    const cityStateCountryPostal = addressParts.slice(-2).join(',').trim();

    return {
      companyName,
      companyDescription,
      addressLine,
      cityStateCountryPostal
    };
  };

  return (
    <div className="contact-info-container">
      <div className="map-section">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="450"
              height="300"
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15717.482159013798!2d76.3240716!3d9.9862192!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080cd0b324123d%3A0x1816999b2d1e93c3!2sElectrapower%20Engineering%20%7C%20A%20grade%20Electrical%20Engineers%20%26%20Contractors!5e0!3m2!1sen!2sin!4v1726885681567!5m2!1sen!2sin"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="info-section">
        <div className="top-info">
          <div className="info-box">
            <div className="info-header">
              <img src={img2} alt="Enquiries" className="info-logo" />
              <h3 className="montserrat-regular">FOR ENQUIRIES</h3>
            </div>
            {emailAddresses.length > 0 ? (
              emailAddresses.map((emailObj) => (
                <p key={emailObj.id} className="montserrat-regular">
                  {emailObj.email}
                </p>
              ))
            ) : (
              <p className="montserrat-regular">Loading emails...</p>
            )}
          </div>

          {/* Address section with split logic */}
          {addresses.length > 0 ? (
            addresses.map((addressObj) => {
              const split = splitAddress(addressObj.address);
              return (
                <div key={addressObj.id} className="info-box">
                  <div className="info-header">
                    <img src={img1} alt="Address Icon" className="info-logo" />
                    <h3 className="montserrat-regular">{addressObj.address_type}</h3>
                  </div>
                  <p className="montserrat-regular">{split.companyName}</p>
                  <p className="montserrat-regular">{split.companyDescription}</p>
                  <p className="montserrat-regular">{split.addressLine}</p>
                  <p className="montserrat-regular">{split.cityStateCountryPostal}</p>
                </div>
              );
            })
          ) : (
            <p className="montserrat-regular">Loading addresses...</p>
          )}
        </div>

        <div className="phone-section">
          <div className="phone-box">
            <div className="phone-header">
              <img src={img3} alt="Phone" className="info-logo" />
              <h3 className="montserrat-regular">PHONE NUMBER</h3>
            </div>
            {phoneNumbers.length > 0 ? (
              phoneNumbers.map((phoneObj, index) => (
                <p key={index} className="montserrat-regular">
                  {phoneObj.Contact} <button className="call-button">Call</button>
                </p>
              ))
            ) : (
              <p className="montserrat-regular">Loading phone numbers...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
