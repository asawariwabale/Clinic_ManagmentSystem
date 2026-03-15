import { Link } from "react-router-dom";
//import "./Navbar2.css";

const Navbar2 = () => {
  return (
    <header id="header">

      <div className="top-bar bg-light border-bottom py-2 small">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div>
            <a href="mailto:contact@mail.com" className="me-3 text-dark text-decoration-none">
              <i className="bi bi-envelope me-1"></i> &#128231; contact@mail.com
            </a>
            <a href="tel:+00112233495" className="text-dark text-decoration-none">
              <i className="bi bi-telephone me-1"></i>&#128222; +00 112 233 495
            </a>
          </div>
          <div>
            <a href="#" className="text-dark me-3"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-dark me-3"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-dark me-3"><i className="bi bi-youtube"></i></a>
            <a href="#" className="text-dark"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            Reve<span className="text-primary">Tive</span>.
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-primary" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
        
        </div>
      </div>
    </nav>
    </header >
  );
};

export default Navbar2;
