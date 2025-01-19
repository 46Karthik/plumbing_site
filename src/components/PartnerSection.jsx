// import React from 'react';
import '../styles.css';
import partnerImage from "../assets/img/patnerimgnew.png"; // Adjust the path if necessary
import partnerImagePortrait from "../assets/img/partneraboutpotrait.png"; // Adjust the path if necessary

const PartnerSection = () => {
    return (
        <div className="partner-section">
            <img src={partnerImage} alt="Electrapower Engineering owner, Mr. Ansar OM, sharing his commitment to providing exceptional service and innovative solutions." className="partner-image" />
            <img src={partnerImagePortrait} alt="Electrapower Engineering owner, Mr. Ansar OM, sharing his commitment to providing exceptional service and innovative solutions." className="partner-image-portrait" />
        </div>
    );
};

export default PartnerSection;
