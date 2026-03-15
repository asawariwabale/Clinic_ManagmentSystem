import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import DentalIcon from './DentalIcon.jpg'; 

const Navbar = () => {
  return (
    <nav id="header">
      <div className="logo-container">
        <div className="logo-container-img">
         <img src={DentalIcon} alt="Dental Icon" className="logo" />
       </div>
        <h1 id="head-t">SmileCare</h1>  
      </div>

      <ul id="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/*<li><Link to="/services">Services</Link></li>*/}
      </ul>
    </nav>
  );
};

export default Navbar;
