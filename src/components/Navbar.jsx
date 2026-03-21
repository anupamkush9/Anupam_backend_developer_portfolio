import React from "react";

const Navbar = () => {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-3"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="container">
        <a className="navbar-brand fw-bold text-orange fs-4" href="#home">Portfolio</a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-orange" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-orange" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-orange" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-orange" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-orange" href="#certifications">Certifications</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-orange" href="#medium-articles">Articles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-orange" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;