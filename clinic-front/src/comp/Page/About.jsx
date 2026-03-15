import React from "react";
import "./About.css"; 
import ClinicImg from "./ClinicImg.jpg"; 

const About = () => {
  return (
    <div className="about-container">
      <h1>About SmileCare</h1>

      <div className="about-content">
        <div className="about-text">
          <p>
            At <strong>SmileCare</strong>, we believe every smile deserves expert care. 
            Our mission is to provide world-class dental treatments in a warm, 
            patient-friendly environment where comfort and precision come together.
          </p>

          <h2>Our Commitment</h2>
          <p>
            With a team of experienced specialists in orthodontics, cosmetic dentistry, 
            endodontics, and pediatric care, we ensure complete oral health solutions 
            for the whole family. From routine check-ups to advanced smile makeovers, 
            we bring expertise and compassion to every treatment.
          </p>

          <h2>Why Choose SmileCare?</h2>
          <ul>
            <li>10+ years of trusted dental excellence.</li>
            <li>Latest technology for safe and painless treatments.</li>
            <li>Specialized care for children and adults.</li>
            <li>Personalized treatment plans tailored to your smile.</li>
          </ul>

          <p>
            At <strong>SmileCare</strong>, your confidence begins with a healthy smile. 
            We’re here to help you achieve it.
          </p>
        </div>

        <div className="about-image">
           <img src={ClinicImg} alt="SmileCare Clinic" /> 
        </div>
      </div>
    </div>
  );
};

export default About;
