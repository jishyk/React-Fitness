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
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form>
          <div classsName="form-group">
            <label htmlFor="emailOrPhone">Email or Phone Number:</label>
            <input type="text" id="emailOrPhone" name="emailOrPhone" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-group">
            <button type="submit" className="login-button">Login</button>
          </div>
        </form>
        <div className="form-group">
          <Link to="/create-account" className="signup-button">Create New Account</Link>
        </div>
      </div>
    </div>
  );
}