{/* <div className="add-workout-container">
            <div className="add-workout-box">
                <h2>Add Workout</h2> */}
{/* Form or content for adding a workout */ }
//                 <Link to="/dashboard" className="back-to-dashboard-button">Back to Dashboard</Link>
//             </div>
//         </div>

// export default AddWork;

import React from "react";
import { Link } from "react-router-dom";
import "../css/add-work.css";
import { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_EXERCISE } from '../utils/mutations';
import AuthService from '../utils/auth';



const AddExercise = () => {
    const [exerciseInfo, setExerciseInfo] = useState({
        name: '',
        exercise: '',
        workoutLength: '',
        caloriesBurned: '',
        feeling: '',
    });

    const [addExercise, { error }] = useMutation(ADD_EXERCISE);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            // const token = AuthService.getToken();
            const { data } = await addExercise({
                variables: {
                    name: exerciseInfo.name,
                    exercise: exerciseInfo.exercise,
                    workoutLength: exerciseInfo.workoutLength,
                    caloriesBurned: parseInt(exerciseInfo.caloriesBurned),
                    feeling: exerciseInfo.feeling,
                    exerciseAuthor: AuthService.getProfile().data.username,
                },
            });
            console.log("Exercise added successfully:", data);


            setExerciseInfo({ name: '', exercise: '', length: '', caloriesBurned: '', feeling: '' });
        } catch (e) {
            console.error(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setExerciseInfo({
            ...exerciseInfo,
            [name]: value,

        });
    };


    return (
        <div id="add-workout" className="workout-container">
            <div className="add-workout-box">
                <h2>Add Workout</h2>
                <form onSubmit={handleFormSubmit}>
                    <input
                        className="form-group"
                        placeholder="Name"
                        name="name"
                        type="text"
                        value={exerciseInfo.name}
                        onChange={handleChange}
                    />
                    <input
                        className="form-group"
                        placeholder="Exercise"
                        name="exercise"
                        type="text"
                        value={exerciseInfo.exercise}
                        onChange={handleChange}
                    />
                    <input
                        className="form-group"
                        placeholder="Minutes Worked Out"
                        name="workoutLength"
                        type="text"
                        value={exerciseInfo.workoutLength}
                        onChange={handleChange}
                    />
                    <input
                        className="form-group"
                        placeholder="Calories Burned"
                        name="caloriesBurned"
                        type="number"
                        value={exerciseInfo.caloriesBurned}
                        onChange={handleChange}
                    />
                    <input
                        className="form-group"
                        placeholder="After Feeling"
                        name="feeling"
                        type="text"
                        value={exerciseInfo.feeling}
                        onChange={handleChange}
                    />
                    <button className="add-work-button" type="submit">Add Exercise</button>
                </form>
                <div className="form-group">
                    <Link to="/dashboard" className="back-to-dashboard-button">Back to Dashboard</Link>
                </div>
            </div>
        </div>
    );
};

export default AddExercise;