// components/Register.js
import "./Register.css";
import React, { useState } from "react";
import  {useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [Uname, setUname] = useState("");
  const [Email, setMail] = useState("");
  const [Password, setPassword] = useState("");
  const [Cpass, setCpass] = useState("");
  const [error, setError] = useState("");
const navigate=useNavigate();
  // Handle form submission
  const send = (e) => {
    e.preventDefault();  // Prevent the default form submission behavior

    if (Password !== Cpass) {
      setError("Passwords do not match.");
      return;
    }

    if (!Uname || !Email || !Password || !Cpass) {
      setError("All fields are required.");
      return;
    }

    // Prepare data for POST request
    const userData = { Uname, Email, Password, Cpass };

    // Sending POST request to the server (index.js)
    axios
      .post("http://localhost:3001/reg", userData)
      .then(() => {
        console.log("Registration success");
        alert("Registration successful!");
        navigate("/login");
        // Reset fields after successful registration
        setUname("");
        setMail("");
        setPassword("");
        setCpass("");
        setError(""); // Clear any previous error
      })
      .catch((error) => {
        console.error("Error during registration", error);
        setError("An error occurred during registration. Please try again.");
      });
  };

  return (
    <div className="mainlayouts wrapper" >
      <div className="regbd">
      <div className="bo">
      <div className="">
        <h1>Register</h1>
        <form onSubmit={send} className="sid">
          <b>
            <label>UserName:</label>
            <input
              type="text"
              value={Uname}
              onChange={(e) => setUname(e.target.value)}
              required
            />
            <br />
            <label>E-mail:</label>
            <input
              type="email"
              value={Email}
              onChange={(e) => setMail(e.target.value)}
              required
            />
            <br />
            <label>Password:</label>
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <label>Confirm Password:</label>
            <input
              type="password"
              value={Cpass}
              onChange={(e) => setCpass(e.target.value)}
              required
            />
          </b>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <center>
            <button type="submit" className="utton">Submit</button>
          </center>
        </form>
      </div>
      <div className="colorlibcopy-agile">
        <p>
          
          <a href="https://colorlib.com/" target="_blank" rel="noopener noreferrer">
            
          </a>
        </p>
      </div>
      </div>
      <ul className="colorlib-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </div>
    </div>
  );
};

export default Register;
