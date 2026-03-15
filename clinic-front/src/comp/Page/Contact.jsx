import React, { useState } from "react";
import "./Contact.css";

const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  
  const validate = () => {
    const newErrors = {};

    
    if (!firstName) {
      newErrors.firstName = "First Name is required";
    }

   
    if (!lastName) {
      newErrors.lastName = "Last Name is required";
    }

  
    if (!phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

  
    if (!position) {
      newErrors.position = "Position is required";
    }

    
    if (!message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    
    console.log(Object.keys(newErrors).length === 0);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Submitted Successfully!");
      console.log({ firstName, lastName, phone, position, message });

      const data = {
        firstName,
        lastName,
        phone,
        position,
        message,
      };

      fetch("https://api.restful-api.dev/objects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: firstName + " " + lastName, data }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setSuccess("Form Submitted Successfully!");
          setFirstName("");
          setLastName("");
          setPhone("");
          setPosition("");
          setMessage("");
          setErrors({});
        })
        .catch((error) => console.error(error));
    } else {
      console.log("Validation Failed");
      setSuccess("");
    }
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>

        <p className="text-success">{success}</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <div style={{ width: "100%" }}>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <small className="text-danger">{errors.firstName}</small>
              )}
            </div>

            <div style={{ width: "100%" }}>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && (
                <small className="text-danger">{errors.lastName}</small>
              )}
            </div>
          </div>

          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <small className="text-danger">{errors.phone}</small>}

          <input
            type="text"
            placeholder="Primary Position / Title"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          {errors.position && (
            <small className="text-danger">{errors.position}</small>
          )}

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && (
            <small className="text-danger">{errors.message}</small>
          )}

          <div className="btn-container">
            <button type="submit">Send Message</button>
          </div>
        </form>

        <div className="contact-info">
          <div>
            <p>&#128205; 123 Smile Street, Dental City</p>
          </div>
          <div>
            <p>&#128222; +91 8010551355</p>
          </div>
          <div>
            <p>&#128231; smilecaredental@123.com</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>Smile Dental Clinic</h3>
            <p>
              We are dedicated to maintaining your dental health. Trust our
              experienced specialists to keep your smile healthy and bright.
            </p>
          </div>

          <div className="footer-section services">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Dental Checkup</a></li>
              <li><a href="#">Teeth Whitening</a></li>
              <li><a href="#">Dental Implants</a></li>
              <li><a href="#">Orthodontics</a></li>
              <li><a href="#">Kids Dentistry</a></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact</h3>
            <p>&#128205; 123 Smile Street, Dental City</p>
            <p>&#128222; +91 8010551355</p>
            <p>&#128231; smilecaredental@123.com</p>
          </div>

          <div className="footer-section social">
            <h3>Follow Us</h3>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>Twitter
            </a>
          </div>


        </div>

        <div className="footer-bottom">
          <p>© 2025 Smile Dental Clinic. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default ContactPage;
