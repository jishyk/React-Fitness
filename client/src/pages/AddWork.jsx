import React from "react";
import { Link } from "react-router-dom";
import "../css/add-work.css";
import { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_EXERCISE } from '../utils/mutations';
import Auth from '../utils/auth';

const AddWork = () => {
    const [formState, setFormState] = useState({
        name: '',
        exercise: '',
        length: '',
        caloriesBurned: '',
        feeling: '',
    });

    const [addExercise, { error, data }] = useMutation(ADD_EXERCISE);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addExercise({
                variables: { ...formState },
            });
            console.log("Exercise added successfully:", data);

            Auth.login(data.addExercise.token);
        } catch (e) {
            console.error(e);
        }
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
                        value={formState.name}
                        onChange={handleChange}
                    />
                    <input 
                        className="form-group"
                        placeholder="Exercise"
                        name="exercise"
                        type="text"
                        value={formState.exercise}
                        onChange={handleChange}
                    />
                    <input 
                        className="form-group"
                        placeholder="Length"
                        name="length"
                        type="number"
                        value={formState.length}
                        onChange={handleChange}
                    />
                    <input 
                        className="form-group"
                        placeholder="Calories Burned"
                        name="caloriesBurned"
                        type="number"
                        value={formState.caloriesBurned}
                        onChange={handleChange}
                    />
                    <input 
                        className="form-group"
                        placeholder="After Feeling"
                        name="feeling"
                        type="text"
                        value={formState.feeling}
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

export default AddWork;