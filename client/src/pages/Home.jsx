import React from "react";
import { Link } from "react-router-dom";
import "../css/app.css";
import Login from "../components/Login";

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
        <Login />
        <div className="form-group">
          <Link to="/create-account" className="signup-button">Create New Account</Link>
        </div>
      </div>
    </div>
  );
}