import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/app.css";
import AuthService from '../utils/auth';

const AddNav = () => {
    const location = useLocation();
    const [showDropDown, setShowDropDown] = useState(false);

    const isActive = (path) => {
        return location.pathname === path ? "nav-link active" : "nav-link";
    };

    const handleDropDownClick = () => {
        setShowDropDown(!showDropDown);
    };

    const isLoggedIn = AuthService.loggedIn();

    return isLoggedIn ? (
        <nav className={`dropDown ${showDropDown ? 'active' : ''}`} onClick={handleDropDownClick}>
            <span>DROPDOWN</span>
            {showDropDown && (
                <div className="dropDownContent">
                    <ul>
                        <li>
                            <Link to="/add-work" className={isActive('/AddWork')}>
                                Add Workout
                            </Link>
                        </li>
                        <li>
                            <Link to="/add-nutrition" className={isActive('/AddNutrition')}>
                                Add Nutrition
                            </Link>
                        </li>
                        <li>
                            <Link to="/add-goal" className={isActive('/AddGoal')}>
                                Add Goal
                            </Link>
                        </li>
                        <li>
                            <Link to="/journal" className={isActive('/journal')}>
                                My Journal
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    ) : null;
}

export default AddNav;
