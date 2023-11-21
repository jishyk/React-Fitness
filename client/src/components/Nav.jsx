import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/app.css";

const isActive = (path) => {
    const currentPath = useLocation().pathname;
    return currentPath === path ? "nav-link active" : "nav-link";
}

function AddNav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className={isActive('/')}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/addWork" className={isActive('/addWork')}>
                        Add Workout
                    </Link>
                </li>
                <li>
                    <Link to="/addNutrition" className={isActive('/addNutrtion')}>
                        Add Nutrition
                    </Link>
                </li>
                <li>
                    <Link to="/addGoal" className={isActive('/addGoal')}>
                        Add Goal
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default AddNav