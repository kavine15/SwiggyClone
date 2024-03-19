import React, { useState } from "react";
import email from '../assets/email.png';
import password from "../assets/password.png";
import person from '../assets/person.png';
import '../App.css'

const Login = () => {
  const [action, setAction] = useState("SignUp");

  return (
    <div className="first">
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <img src={person} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <img src={email} alt="" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <img src={password} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Login" && (
        <div className="forgot-password">
          Lost Password?<span> Click Here</span>
        </div>
      )}
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>
          SignUp
        </div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>
          Login
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
