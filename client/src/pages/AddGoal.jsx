// import React from "react";
// import { Link } from "react-router-dom";
// import "../css/add-goal.css";
// import { useState } from 'react';
// import { useMutation } from "@apollo/client";
// import { UPDATE_EXERCISE_GOAL } from '../utils/mutations';
// import Auth from '../utils/auth';

// const AddGoal = () => {
    // const [formState, setFormState] = useState({
        // goalExercise: '',
    // });

    // const [addAchievement, { error, data }] = useMutation(UPDATE_EXERCISE_GOAL);

    // const handleChange = (event) => {
        // const { name, value } = event.target;

        // setFormState({
            // ...formState,
            // [name]: value,
        // });
    // };

    // const handleFormSubmit = async (event) => {
        // event.preventDefault();

        // try {
            // const { data } = await addAchievement({
                // variables: { ...formState },
            // });
            // console.log("Goal added successfully:", data);

            // Auth.login(data.addAchievement.token);
        // } catch (e) {
            // console.error(e);
        // }
    // };

    // return (
        // <div id="add-goal" className="goal-container">
            // <div className="add-goal-box">
                // <h2>Add Goal</h2>
                // <form onSubmit={handleFormSubmit}>
                    // <input
                        // className="form-group"
                        // placeholder="Add Goal"
                        // name="goalExercise"
                        // type="text"
                        // value={formState.goalExercise}
                        // onChange={handleChange}
                    // />
                // </form>
                // <div className="form-group">
                    // <Link to="/dashboard" className="back-to-dashboard-button">Back to Dashboard</Link>
                // </div>
            // </div>
        // </div>
    // );
// };

// export default AddGoal;

import React from "react";
import AddGoal from "../components/Goals";

export default function addAchievement() {
  return (
    <div>
      <AddGoal />
    </div>
  );
}