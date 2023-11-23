import React from "react";
import { Link } from "react-router-dom";
import "../css/create-account.css";

const CreateAccount = () => {
    return (
        <div id="create-account" className="home-container">
            <div className="signup-box">
                <h2>Create an Account</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="emailOrPhone">Email or Phone Number:</label>
                        <input type="text" id="emailOrPhone" name="emailOrPhone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="login-button">Create Account</button>
                    </div>
                </form>
                <div className="form-group">
                    <Link to="/" className="signup-button">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;