import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../css/journal.css"
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const styles = {
    journalContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        color: '#333',
        height: '100%',
        width: '80%',
        // marginLeft: 20,
        // marginBottom: 60,
        margin: '0 auto',
        paddingTop: 20,
        fontSize: 14,
        borderRadius: 8,
    },
    header: {
        marginBottom: 20,
    },
    journalBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'flex-start',
        background: '#fff',
        color: '#333',
        // height: '70%',
        width: '80%',
        // marginLeft: 0,
        marginTop: 20,
        marginBottom: 20,
        padding: 20,
        // fontSize: 14,
        textAlign: 'left',
        border: '1px solid #000',
        borderRadius: 8,
    },
    TempFieldSmall: {
        // height: '100%',
        width: '100%',
        fontSize: 14,
        textAlign: 'left',
        margin: '10px 0',
    },
    TempFieldLarge: {
        // height: '100%',
        width: '100%',
        fontSize: 14,
        textAlign: 'left',
        margin: '10px 0',
    },
    TempFieldNull: {
        height: '100%',
        width: 0,
    },
}

const Journal = () => {
    const { loading, data, error } = useQuery(QUERY_ME);

    useEffect(() => {
        console.log(data);
    }, [data]);

    if (loading) {
        return <h3>Loading...</h3>;
    }
    const user = data && data.me;
    const exercises = user.exercises || [];

    if (!exercises.length) {
        return <h3>You have nothing in your journal. Get started on your fitness journey by adding a nutrition or an exercise.</h3>
    }
    console.log(exercises);
    // const workoutEmoji = 127947;
    // const nutritionEmoji = '&#x1f3cb';

    const last10Exercises = exercises.slice(-10);
    return (
        <div className="journalContainer">
            <h3 className="journalBox">Journal</h3>
            <Link to="/dashboard" className="back-to-dashboard-button">Back to Dashboard</Link>
            <div style={styles.journalBox}>
                {last10Exercises.map((exercise) => (
                    <div key={exercise._id} style={styles.journalBox} className="journalBox card mb-3">
                        <div style={styles.TypeFieldLarge}>{exercise.createdAt}</div>
                        <div style={styles.TempFieldSmall}>Workout Name: {exercise.name}</div>
                        <div style={styles.TempFieldSmall}>Exercise: {exercise.exercise}</div>
                        <div style={styles.TempFieldSmall}>Workout Length: {exercise.workoutLength}</div>
                        <div style={styles.TempFieldSmall}>Calories Burned: {exercise.caloriesBurned}</div>
                        <div style={styles.TempFieldSmall}>Calories Burned: {exercise.feeling}</div>
                    </div>

                ))}
            </div>
            <div className="form-group">
            </div>
        </div>
    )
};

export default Journal;



