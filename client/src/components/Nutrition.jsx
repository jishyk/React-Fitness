
// <div className="nutrition-container">
    // <div className="add-nutrition-box">
        // <h2>Add Nutrition</h2>
        // <form onSubmit={handleFormSubmit} className="nutrition-form">
            // {/* Input fields */}
            // <button type="submit" className="add-nutrition-button">Add Nutrition</button>
        // </form>
        // <Link to="/dashboard" className="back-to-dashboard-button">Back to Dashboard</Link>
    // </div>
// </div>

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/add-nutrition.css"; // Update CSS path as needed
import { useMutation } from "@apollo/client";
import { ADD_NUTRITION } from '../utils/mutations'; // Update mutation import
import AuthService from '../utils/auth';
import AddNav from "./Nav";

const AddNutrition = () => {
    const [formState, setFormState] = useState({
        name: '',
        calories: '',
    });

    const [addNutrition, { error }] = useMutation(ADD_NUTRITION); // Update mutation function

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addNutrition({
                variables: { 
                    name: formState.name.trim(),
                    calories: parseInt(formState.calories),
                    nutritionAuthor: AuthService.getProfile().data.username,
                 },
            });
            console.log("Nutrition added successfully:", data);
            window.alert("Nutrition added successfully!");

            setFormState({ name: '', calories: '' }); // Reset form

            // Update this part as per your application's logic
            // Auth.login might not be necessary here unless it's related to authentication
        } catch (e) {
            console.error(e);
            window.alert("Nutrition not added successfully. Please try again.");
        }
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div id="add-nutrition" className="nutrition-container">
            <div className="add-nutrition-box">
                     <style>
                        {`
                            @media (max-width: 962px) {
                                .navForNutrition {
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
                                .navForNutrition {
                                    position: relative;
                                    left: -40px;
                                    margin-left: 20px;
                                }

                            }
                        `}

                    </style>
                <div className="navForNutrition">
                    <AddNav />
                </div>
                <h2>Add Nutrition</h2>
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
                        placeholder="Calories"
                        name="calories"
                        type="number"
                        value={formState.calories}
                        onChange={handleChange}
                    />
                    <button className="add-nutrition-button" type="submit">Add Nutrition</button>
                </form>
                <div className="form-group">
                    <Link to="/dashboard" className="back-to-dashboard-button">Back to Dashboard</Link>
                </div>
            </div>
        </div>
    );
};

export default AddNutrition;
