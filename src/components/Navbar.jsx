import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/img/logo_a.png';
import divider from "../assets/img/divider1.png";
import mobileDivider from "../assets/img/navbar_vector.svg";
import "../styles.css";

function Navbar() {
  const isMobile = useMediaQuery("(max-width:1024px)");
  const is1920Screen = useMediaQuery("(min-width: 1920px)");
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? "text-orange" : "";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isServicesActive = () => {
    const servicesRoutes = [
      "/services-design-consulting",
      "/services-installation-commisioning",
      "/services-panelboard-control-systems",
      "/services-statutory-approvals",
      "/services-maintenance-repairs",
      "/services-valueadded",
    ];
    return servicesRoutes.includes(location.pathname) ? "text-orange" : "";
  };

  
  return (
    <>
      <div className={`sticky-navbar z-[999] ${isMobile ? '' : ''}`}>
        <div className={`navbar bg-base-100 mt-2 w-full ${
          isMobile ? 'rounded-b-xl shadow-md' : 
          is1920Screen ? 'px-20' : ''
        }`}>
          {isMobile ? (
            <>
              <div className="navbar-start w-full flex flex-col items-center">
                <div className="flex justify-between w-full px-4">
                  <Link to="/">
                    <img src={logo} alt="logo" className="h-9 w-15" />
                  </Link>
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost"
                      onClick={toggleMenu}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16"
                        />
                      </svg>
                    </div>
                    {/* {isOpen && (
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content text-base bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow right-0"
                      >
                        <li>
                          <Link to="/" className={`montserrat-medium ${isActive('/')}`} onClick={toggleMenu}>
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/aboutus" className={`montserrat-medium ${isActive('/aboutus')}`} onClick={toggleMenu}>
                            About
                          </Link>
                        </li>
                        <li>
                          <Link to='/services-design-consulting' className={`montserrat-medium ${isServicesActive()}`} onClick={toggleMenu}>
                            Services
                          </Link> 
                        </li>
                        <li>
                          <Link to="/portfolio-projects" className={`montserrat-medium ${isActive('/portfolio-projects')}`} onClick={toggleMenu}>
                            Portfolio Projects
                          </Link>
                        </li>
                        <li>
                          <Link to="/all-projects" className={`montserrat-medium ${isActive('/all-projects')}`} onClick={toggleMenu}>
                            All Project
                          </Link>
                        </li>
                        <li>
                          <Link to="/careers" className={`montserrat-medium ${isActive('/careers')}`} onClick={toggleMenu}>
                            Careers
                          </Link>
                        </li>
                        <li>
                          <Link to="/contactus" className={`montserrat-medium ${isActive('/contactus')}`} onClick={toggleMenu}>
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link to="/contactus#enquire" className={`montserrat-medium ${isActive('/enquire')}`} onClick={toggleMenu}>
                            Enquire
                          </Link>
                        </li>
                      </ul>
                    )} */}
                  </div>
                </div>
                <div className="w-full mt-2">
                  <img src={mobileDivider} alt="divider" className="w-full" />
                </div>
                <div className="mt-2 text-center">
                  <h3 className="montserrat-regular text-sm">
                    'A' grade Electrical Engineers & Contractors
                  </h3>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={`navbar-start ${is1920Screen ? 'flex-1' : ''}`}>
                <div className={`${is1920Screen ? 'ml-0' : 'ml-14'} h-10 w-40`}>
                  <Link to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
                <div className="mx-5">
                  <img src={divider} alt="divider" />
                </div>
                <div>
                  <h3 className="montserrat-regular">
                    'A' grade Electrical Engineers & Contactors
                  </h3>
                </div>
              </div>
              {/* <div className={`navbar-center hidden lg:flex ${is1920Screen ? 'flex-1 justify-end' : ''}`}>
                <ul className={`menu menu-horizontal px-1 ${is1920Screen ? 'mr-2' : ''}`}>
                  <li>
                    <Link to="/aboutus" className={`montserrat-medium ${isActive('/aboutus')}`}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/services-design-consulting" className={`montserrat-medium ${isServicesActive()}`}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio-projects" className={`montserrat-medium ${isActive('/portfolio-projects')}`}>
                      Portfolio Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="/all-projects" className={`montserrat-medium ${isActive('/all-projects')}`}>
                      All Project
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className={`montserrat-medium ${isActive('/careers')}`}>
                      Careers
                    </Link>
                  </li>
                </ul>
                <div className={`flex items-center ${is1920Screen ? '' : 'mx-3'}`}>
                  <Link to="/contactus" className={is1920Screen ? "mr-3" : "mr-3"}>
                    <button className={`btn btn-md px-8 bg-transparent rounded-full border-1 border-black ${isActive('/contact')}`}>
                      <h3 className="montserrat-regular text-black">Contact</h3>
                    </button>
                  </Link>
                  <Link to="/contactus#enquire">
                    <button className={`btn btn-md px-8 bg-orange rounded-full ${isActive('/enquire')}`}>
                      <h3 className="montserrat-regular text-white">Enquire</h3>
                    </button>
                  </Link>
                </div>
              </div> */}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;