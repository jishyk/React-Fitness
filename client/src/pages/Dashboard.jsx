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
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import "../css/dashboard.css";
import AuthService from '../utils/auth';
import TodayExercise from "../components/TodayExcercise";
import TodayNutrition from "../components/TodayNutrition";
import { Link } from 'react-router-dom';
const Dashboard = () => {
    const { loading, error, data } = useQuery(QUERY_ME);
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
    // const workoutGoal = user.goalExercise;
    // const nutritionGoal = user.goalNutrition;



    return (
        <div>
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
                            <TodayExercise />
                        </div>
                        <div>
                            <TodayNutrition />
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
