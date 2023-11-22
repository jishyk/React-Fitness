import React from "react";
import { Link } from "react-router-dom";
import "../css/app.css";

export default function Home() {
  return (
    <div id="home" className="home-container">
      <div className="welcome-section">
        <h1>Welcome to reactFitness!</h1>
        <p>
          🚀 Welcome to reactFitness – Your Ultimate Fitness Companion! 
          Unleash the power of precision with our intuitive exercise tracking, personalized nutrition 
          insights, and daily goal setting. Whether you're a fitness veteran or a beginner, reactFitness 
          is your dedicated partner in achieving and surpassing milestones. Connect with a thriving 
          community, celebrate victories, and embark on a transformative journey toward a healthier, 
          stronger you. Download reactFitness now and redefine your fitness experience 
          – because every workout brings you closer to your best self! 💪✨
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