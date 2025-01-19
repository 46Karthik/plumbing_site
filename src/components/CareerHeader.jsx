import webBanner from "../assets/img/Career_Banner_Web.webp";
import mobileBanner from "../assets/img/EPE_Career_page_mob.webp";
import { useMediaQuery } from "@mui/material";

function CareerHeader() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <div className="career-header">
        {/* <div className="career-header-overlay"></div> */}
        <img src={isMobile ? mobileBanner :webBanner} alt="A group of electrapower electrical site engineers and technicians standing in front of a construction site, their shadows cast forward onto the ground." className="career-header-img" />
        {/* <h1 className="career-header-title montserrat-medium">Careers</h1> */}
      </div>
    </>
  );
}

export default CareerHeader;
