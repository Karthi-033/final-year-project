// components/Login.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import Profile from "./Profile.js";
import "./Login.css";
import axios from 'axios';
const Login = () => {
  const [Uname,setUname]=useState();
  const [Password,setPass]=useState();
  const navigate=useNavigate();
  const send =()=>{
    axios.post("http://localhost:3001/log",{Uname,Password})
    .then((d)=>{
      if(d.data===1){
      alert("login success " +Uname);
   navigate("/profile" , {state: Uname});

      }
      else if(d.data===0)
      {
        alert("Wrong Password Try again");
      }
      else{
        alert("Please Register User name not found");
      }
    })

  }

  return (
    <div className="box">
      <div className="ins">
      <h1>Login</h1>
      <b>
      <label>UserName : </label>
      <input type="text" onChange={(e)=>setUname(e.target.value)} required></input><br></br>
     
      <label>Password : </label>
      <input type="text" onChange={(e)=>setPass(e.target.value)} required></input><br></br>
      </b>
      </div>
      <center>
      {/* <Link to="/Profile" className="navbar-link"> */}
              <button type="submit" className="Logincolor" onClick={send}>Login</button>
              {/* </Link> */}
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
              </center>

              <a href="https://colorlib.com/" target="_blank" rel="noopener noreferrer"></a>
         

    </div>
  );
};

export default Login;
