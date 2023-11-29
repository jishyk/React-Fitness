import React from "react";
import { Link } from "react-router-dom";
import "../css/add-goal.css";
import { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_GOALEXERCISE } from '../utils/mutations';
import Auth from '../utils/auth';

const GoalEntry = () => {
    const [formState, setFormState] = useState({
        goalExercise: '',
    });

    const [addAchievement, { error, data }] = useMutation(ADD_GOALEXERCISE);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState.goalExercise)
        try {
            const { data } = await addAchievement({
                variables: {
                    goalExercise: parseInt(formState.goalExercise)
                 },
            });
            console.log("Goal added successfully:", data);

            // Auth.login(data.addAchievement.token);
        } catch (e) {
            console.error(e);
        }
    };
    

    return (
        <div id="add-goal" className="goal-container">
            <div className="add-goal-box">
                <h2>Add Goal</h2>
                <form onSubmit={handleFormSubmit}>
                    <input
                        className="form-group"
                        placeholder="Add Goal"
                        name="goalExercise"
                        type="number"
                        value={formState.goalExercise}
                        onChange={handleChange}
                    />
                     <button type="submit" className="add-goal-button">Add Goal</button>
                </form>
                <div className="form-group">
                    <Link to="/dashboard" className="back-to-dashboard-button">Back to Dashboard</Link>
                </div>
            </div>
        </div>
    );
};

export default GoalEntry;
