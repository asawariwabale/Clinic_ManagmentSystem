
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Comp/Navbar/Navbar"; // Case-sensitive


const Home = lazy(() => import("./Comp/Page/Home"));
const Doctors = lazy(() => import("./Comp/Page/Doctors"));
const About = lazy(() => import("./Comp/Page/About"));
const Contact = lazy(() => import("./Comp/Page/Contact"));
const Services = lazy(() => import("./Comp/Page/Services"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Suspense>

     
      <About />
      <Services />
      <Doctors />
      <Contact />
    </Router>
  );
}

export default App;