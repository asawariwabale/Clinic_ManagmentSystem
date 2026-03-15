import React from "react";
import "./Services.css";
import Teethwhitening from'./Teethwhitening.jpg';
import PreventiveCare from'./PreventiveCare.jpg';
import CosmeticDentistry from'./CosmeticDentistry.jpg';
import Orthodontics from'./Orthodontics.jpg';
import RootCanalTreatment from'./RootCanalTreatment.jpg';
import DentalImplants from'./DentalImplants.jpg';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>We provide a wide range of dental services to keep your smile healthy and bright.</p>

      <div className="services-list">
        <div className="service-card">     
           <img src={Teethwhitening} alt="Teeth Whitening" className="service-image" />
          <h3>Teeth Whitening</h3>
          <p>Brighten your smile with safe and effective whitening treatments.</p>
        </div>

        <div className="service-card">
          <img src={PreventiveCare} alt="Preventive Care" className="service-image" />
          <h3>Preventive Care</h3>
          <p>Regular check-ups, cleaning, and preventive measures to maintain oral health.</p>
        </div>

        <div className="service-card">
          <img src={CosmeticDentistry} alt="Cosmetic Dentistry" className="service-image" />
          <h3>Cosmetic Dentistry</h3>
          <p>Enhance your smile with veneers, crowns, and cosmetic dental solutions.</p>
        </div>

        <div className="service-card">
          <img src={Orthodontics} alt="Orthodontics" className="service-image" />
          <h3>Orthodontics</h3>
          <p>Straighten your teeth with braces or aligners for a perfect smile.</p>
        </div>

        <div className="service-card">
          <img src={RootCanalTreatment} alt="Root Canal Treatment" className="service-image" />
          <h3>Root Canal Treatment</h3>
          <p>Treat infections and save your natural teeth with painless root canal therapy.</p>
        </div>

        <div className="service-card">
          <img src={DentalImplants} alt="Dental Implants" className="service-image" />
          <h3>Dental Implants</h3>
          <p>Replace missing teeth with durable and natural-looking dental implants.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Services;
