import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/app.css";

const AddNav = () => {
    const location = useLocation();
    const [showDropDown, setShowDropDown] = useState(false);

    const isActive = (path) => {
        return location.pathname === path ? "nav-link active" : "nav-link";
    };

    const handleDropDownClick = () => {
        setShowDropDown(!showDropDown);
    };

    return (
        <nav className={`dropDown ${showDropDown ? 'active' : ''}`} onClick={handleDropDownClick}>
            <span>DROPDOWN</span>
            {showDropDown && (
                <div className="dropDownContent">
                    <ul>
                        <li>
                            <Link to="/AddWork" className={isActive('/AddWork')}>
                                Add Workout
                            </Link>
                        </li>
                        <li>
                            <Link to="/AddNutrition" className={isActive('/AddNutrition')}>
                                Add Nutrition
                            </Link>
                        </li>
                        <li>
                            <Link to="/AddGoal" className={isActive('/AddGoal')}>
                                Add Goal
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default AddNav;
