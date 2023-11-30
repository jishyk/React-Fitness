import React from "react";
import { Link } from "react-router-dom";
import "../css/add-goal.css";
import { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_EXERCISE_GOAL, ADD_NUTRITION_GOAL } from '../utils/mutations';
import Auth from '../utils/auth';
import AddNav from "./Nav";

const GoalEntry = () => {
    const [formState, setFormState] = useState({
        goalExercise: '',
    });
    const [nutritionState, setNutritionState] = useState({
        goalNutrition: '',
    });

    const [addAchievement, { error, data }] = useMutation(ADD_EXERCISE_GOAL);
    const [addNutritionGoal, { error2, data2 }] = useMutation(ADD_NUTRITION_GOAL);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleChangeNutrition = (event) => {
        const { name, value } = event.target;
        
        setNutritionState({
            ...nutritionState,
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
            window.alert("Exercise Goal added successfully!");

            setFormState({ goalExercise: '' });

            // Auth.login(data.addAchievement.token);
        } catch (e) {
            console.error(e);
            window.alert("Exercise Goal not added successfully. Please try again.");
        }
    };

    const handleFormSubmitNutrition = async (event) => {
        event.preventDefault();
        console.log(nutritionState.goalNutrition)
        try {
            const { data2 } = await addNutritionGoal({
                variables: {
                    goalNutrition: parseInt(nutritionState.goalNutrition)
                 },
            });
            console.log("Goal added successfully:", data2);
            window.alert("Nutrition Goal added successfully!");

            // Auth.login(data.addAchievement.token);
            setNutritionState({ goalNutrition: '' });
        } catch (e) {
            console.error(e);
            window.alert("Nutrition Goal not added successfully. Please try again.");
        }
    };
    

    return (
        <div id="add-goal" className="goal-container">
            <div className="add-goal-box">
            <style>
                        {`
                            @media (max-width: 962px) {
                                .navForGoals {
                                    position: relative;
                                    left: 0;
                                    top: 30px;
                                    margin-left: -20px;
                    
                                }
                                .dropDownContent {
                                    height: 15%;
                                    white-space: nowrap;
                                    overflow-y: scroll;
                                }

                            }
                            @media (max-width: 612px) {
                                .navForGoals {
                                    position: relative;
                                    left: -40px;
                                    margin-left: 20px;
                                }

                            }
                        `}

                    </style>
                <div className="navForGoals">
                    <AddNav />
                </div>
                <h2>Add Goal</h2>
                <form onSubmit={handleFormSubmit}>
                    <h3>Exercise Goal</h3>
                    <p>Add daily calorie burn goal </p>
                    <input
                        className="form-group"
                        placeholder="Add Exercise Goal"
                        name="goalExercise"
                        type="number"
                        value={formState.goalExercise}
                        onChange={handleChange}
                    />
                     <button type="submit" className="add-goal-button">Add Goal</button>
                </form>
                <br />
                <form onSubmit={handleFormSubmitNutrition}>
                    <h3>Nutrition Goal</h3>
                    <p>Add daily calorie intake goal</p>
                    <input
                        className="form-group"
                        placeholder="Add Nutrition Goal"
                        name="goalNutrition"
                        type="number"
                        value={nutritionState.goalNutrition}
                        onChange={handleChangeNutrition}
                    />
                     <button type="submit" className="add-nutrition-button">Add Nutrtion Goal</button>
                </form>
                <div className="form-group">
                    <Link to="/dashboard" className="back-to-dashboard-button">Back to Dashboard</Link>
                </div>
            </div>
        </div>
    );
};

export default GoalEntry;
