// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Components for the different pages
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import Farm from "./Farm";
import RentalPage from './RentalPage';
import SearchPage from './SearchPage';
import Farmingbasic from './Farming basic.js';
import './App.css'; // Importing the CSS file

function App() {
  return (
    <Router>
      
        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Farm"  element={<Farm />} />
          <Route path="/rent" element={<RentalPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/basic" element={<Farmingbasic />} />
            
        </Routes>
      
    </Router>
  );
}

export default App;
