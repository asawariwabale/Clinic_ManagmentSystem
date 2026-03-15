import React from "react";
import "./Doctors.css";
import Asawari from './Asawari.jpg';
import Tanuja from './Tanuja.jpg';
import Mohini from './Mohini.jpg';
import Snehal from './Snehal.jpg';
import Dnyaneshwar from './Dnyaneshwar.jpg';
import Samita from './Samita.jpg';   
    

const Doctors = () => {
  return (
    <section id="doctors" className="doctors">
      <h2>Meet Our Doctors</h2>
      <div className="doctor-cards">
        
        <div className="doc-card">
          <img src={Asawari} alt="Doctor" />
          <h3>Dr.Asawari Wabale</h3>
          <p>ORTHODONTIST</p>
          <p>Speciality: Braces & Aligners</p>
          <p>Experience: 21+ years</p>
          <p>&#128222; +91 8010551355</p>
        </div>

        <div className="doc-card">
          <img src={Tanuja} alt="Doctor" />
          <h3>Dr.Tanuja Thikekar</h3>
          <p>PEDODONTIST</p>
          <p>Speciality: Child Dental Care & Preventive Dentistry</p>
          <p>Experience: 6+ years</p>
          <p>&#128222; +91 9988776655</p>
        </div>

        

        <div className="doc-card">
          <img src={Snehal} alt="Doctor" />
          <h3>Dr.Snehal Arote</h3>
          <p>PERIODONTIST</p>
          <p>Speciality: Gum Care & Dental Implants</p>
          <p>Experience: 7+ years</p>
          <p>&#128222;+91 8767429203</p>
        </div>

        <div className="doc-card">
          <img src={Dnyaneshwar} alt="Doctor" />
          <h3>Dr.Dnyaneshwar Vhare</h3>
          <p>ENDODONTIST</p>
          <p>Speciality: Root Canal & Dental Restorations</p>
          <p>Experience: 12+ years</p>
          <p>&#128222; +91 8600331472</p>
        </div>

         {/*<div className="doc-card">
          <img src={Dnyaneshwar} alt="Doctor" />
          <h3>Dr.Aishawary Phalke</h3>
          <p>ENDODONTIST</p>
          <p>Speciality: Root Canal & Dental Restorations</p>
          <p>Experience: 12+ years</p>
          <p>&#128222; +91 8600331472</p>
        </div>*/}

        <div className="doc-card">
          <img src={Samita} alt="Doctor" />
          <h3>Dr.Samita Arote</h3>
          <p>ORAL SURGEON</p>
          <p>Speciality: Wisdom Tooth Extraction & Jaw Surgery</p>
          <p>Experience: 15+ years</p>
          <p>&#128222; +91 9123456789</p>
        </div>

       <div className="doc-card">
          <img src={Mohini} alt="Doctor" />
          <h3>Dr.Mohini Tawhare</h3>
          <p>COSMETIC DENTIST</p>
          <p>Speciality: Smile Design & Veneers</p>
          <p>Experience: 8+ years</p>
          <p>&#128222; +91 8788946110</p>
        </div>

      </div>
    </section>
  );
};

export default Doctors;
