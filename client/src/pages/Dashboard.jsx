// import React from "react";

// const Dashboard = () => {

//     return (
//         <div>
//             <h1>Dashboard</h1>
//         </div>
//     );
// }

// export default Dashboard;

// Dashboard.js
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import "../css/dashboard.css";
import AuthService from '../utils/auth';
import TodayExercise from "../components/TodayExcercise";
import TodayNutrition from "../components/TodayNutrition";
import { Link } from 'react-router-dom';
const Dashboard = () => {
    const { loading, error, data } = useQuery(QUERY_ME);
    const [displayExercises, setDisplayExercises] = useState(false);
    const [displayNutritions, setDisplayNutritions] = useState(false);
    const logout = (event) => {
        AuthService.logout();
    };
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error(error);
        return <div>Error</div>;
    }

    const user = data && data.me;

    if (!user) {
        return <div>No user found</div>;
    }

    const username = user.username;
    const exercise = user.exercises;
    console.log(exercise);
    // const nutrition = user.nutrition;
    const workoutGoal = user.goalExercise;
    const nutritionGoal = user.goalNutrition;



    const toggleDisplayExercises = () => {
        setDisplayExercises(!displayExercises);
    };
    const toggleDisplayNutritions = () => {
        setDisplayNutritions(!displayNutritions);
    };

    return (
        <div>
            <div className='dashboard'></div>
            {/* Checks to see if user is logged in using the auth.js in utils,
            if user is logged in, displays welcome message and logout button,
            if user not logged in, displays message. */}
            {AuthService.loggedIn() ? (
                <div>
                    <div className='dashHeader'>
                        <h1>Welcome {username}</h1>
                        <button className="btn btn-lg btn-light m-2" onClick={logout}>
                            Logout
                        </button>
                    </div>
                    <div className='dashSummary'>
                        <h2>Your Day</h2>
                        <div>
                            <button className='btn'
                            onClick={toggleDisplayExercises}>
                                {displayExercises ? "Hide Exercises" : "Show Exercises"}
                                </button> 
                            {displayExercises && <TodayExercise 
                            username={username} workoutGoal={workoutGoal}/>}
                        </div>
                        <div>
                            <button className='btn'
                            onClick={toggleDisplayNutritions}>
                                {displayNutritions ? "Hide Nutrition" : "Show Nutrition"}
                            </button> 
                            {displayNutritions && <TodayNutrition 
                            username={username} nutritionGoal={nutritionGoal}/>}
                        </div>

                    </div>
                </div>

            ) : (
                <h2>Sorry you must be logged in</h2>
            )}
        </div>

    );
};

export default Dashboard;
