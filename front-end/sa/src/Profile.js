import React from 'react';
import { useLocation, useNavigate , Link} from "react-router-dom";
import Login from "./Login.js"; // Make sure this path is correct
import "./profile.css";

const Profile = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state;

    const newfarm = () => {
        navigate("/Farm");
    }
    const rent = () => {
        navigate("/rent");
    }
    const search = () => {
        navigate("/search");
    }
    const basic= ()=>{
      navigate("/basic");
    }
  return (
    <>
    <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>

      <div className="profile-container">
        <div className="profile-header">
          <h1>Hello, {data}</h1>

          <h3>Welcome to the Smart Farming Platform</h3>
        </div>

        <div className="services-intro">
          <p>Explore the services available for farming:</p>
        </div>

        <div className="services-cards">
          <div className="service-card" onClick={newfarm}>
            <div className="service-icon">
              <i className="fas fa-seedling"></i> {/* Agriculture icon */}
            </div>
            <div className="service-info">
              <h4 className="service-title">Start Farming</h4>
              <p className="service-description">Begin your farming journey with us.</p>
            </div>
          </div>

          <div className="service-card" onClick={rent}>
            <div className="service-icon">
              <i className="fas fa-tractor"></i> {/* Tractor icon */}
            </div>
            <div className="service-info">
              <h4 className="service-title">Rent a Field</h4>
              <p className="service-description">Find and rent a field for your farming needs.</p>
            </div>
          </div>

          <div className="service-card" onClick={search}>
            <div className="service-icon">
              <i className="fas fa-search"></i> {/* Search icon */}
            </div>
            <div className="service-info">
              <h4 className="service-title">Search for Field</h4>
              <p className="service-description">Search for available lands to farm.</p>
            </div>
          </div>

          <div className="service-card" onClick={basic}>
            <div className="service-icon">
              <i className="fas fa-book"></i> {/* Book icon for learning farming */}
            </div>
            <div className="service-info">
              <h4 className="service-title">Farming Techniques</h4>
              <p className="service-description">Learn the Techniques of successful farming.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
