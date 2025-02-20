// components/Home.js
import React from "react";
import hp from "./hp.jpg";
import farm from "./farm12.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Home.css"; // Custom CSS for additional styling

const Home = () => {
  return (
    <div className="container-fluid p-0">
      {/* Navigation Bar */}
      <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
        <div className="container">
          <a><p to="/" className="navbar-brand">
            Smart Farming Advisor
          </p></a>
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
                <Link to="/"  className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a to="" href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a to="" href="#contact" className="nav-link">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section>
      <div>
       
        <p className="farm1"> <p id ="txt1" className="display-5 fw-bold text ">
        Grow smarter,not harder-sustainable farming at your fingertips
       </p>  <img src={farm} className="img1"></img>  </p>
        <p className="lead text-muted animate__animated animate__fadeIn animate__delay-1s">
        
        </p>
      
        {/* <img
          src={hp}
          alt="green farming"
          className="img-fluid rounded shadow-lg mt-4 animate__animated animate__zoomIn animate__delay-2s"
        /> */}
       <section id="about" className="container py-5">
        <h2 className="abo">About Smart Farming Advisor</h2>
        <p className="lead text-muted text-center" id="cont">
          Smart Farming Advisor is a revolutionary platform designed to empower farmers
          with real-time data, insights, and recommendations to optimize their
          agricultural practices. Our platform ensures higher productivity,
          sustainability and efficiency in modern farming.
        </p>
        <div className="mov">
        <div className="row mt-4">
          <div className="col-md-6">
            <h4 className="text"  id="fea">Features</h4>
            <ul>
              <li>Weather-based crop suggestions</li>
              <li>Soil health monitoring</li>
              <li>Smart irrigation recommendations</li>
              <li>Pest and disease predictions</li>
              <li>Market price updates</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4 className="text" id="yc">Why Choose Us?</h4>
            <ul>
              <li>AI-powered insights for better decision-making</li>
              <li>Cost-effective farming solutions</li>
              <li>Environmentally friendly approaches</li>
              <li>Easy-to-use interface for farmers</li>
            </ul>
          </div>
        </div>
        </div>
      </section>
       <section id="contact" className="bg-success text-white text-center py-4">
        <h2>Contact Us</h2>
        <p>Email: smartfarmingadvisor@gmail.com</p>
        <p>Phone: 8220765108</p>
      </section>
      </div>
      </section>
    </div>
    
  );
};

export default Home;