import React from "react";
import { Link } from "react-router-dom";
import "../css/app.css";

export default function Home() {
  return (
    <div id="home" className="home-container">
      <div className="welcome-section">
        <h1>Welcome to reactFitness!</h1>
        <p>
          Hello World!
        </p>
      </div>
      <div className="button-section">
        <Link to="/signup" className="signup-button">Sign Up</Link>
        <Link to="/login" className="login-button">Login</Link>
      </div>
    </div>
  );
}