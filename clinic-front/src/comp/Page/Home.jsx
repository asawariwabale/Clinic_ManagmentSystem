import React from "react";
import "./Home.css";
import Herologo from './Herologo.png'; 

const Home = () => {
  return (
    <div className="home-container">
      
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to SmileCare</h1>
          <p>Your smile is our priority. Expert dental care for all ages.</p>
          
        </div>
        <div className="hero-image">
          <img src={Herologo} alt="Dental Care" />
        </div>
      </section>

    </div>

      
  );
};

export default Home;
