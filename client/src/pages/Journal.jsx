import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../css/journal.css"
import { useQuery } from '@apollo/client';
import { QUERY_EXERCISES } from '../utils/queries';

const styles = {
    journalContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#333',
        height: '70%',
        width: '70%',
        marginLeft: 20,
        marginBottom: 60,
        fontSize: 14,
        borderRadius: 8,
    },
    journalBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: '#fff',
        color: '#333',
        height: '70%',
        width: '100%',
        marginLeft: 0,
        marginTop: 4,
        fontSize: 14,
        textAlign: 'left',
        border: '1px solid #000',
        borderRadius: 8,
    },
    TempFieldSmall: {
        height: '100%',
        width: '12%',
        fontSize: 14,
        textAlign: 'left',
        marginLeft: 10,
        marginRight: 10,
    },
    TempFieldLarge: {
        height: '100%',
        width: '18%',
        fontSize: 14,
        textAlign: 'left',
        marginLeft: 10,
        marginRight: 10,
    },
    TempFieldNull: {
        height: '100%',
        width: 0,
    },
}

const Journal = () => {
    const { loading, data, error } = useQuery(QUERY_EXERCISES);

    useEffect(() => {
        console.log(data);
    }, [data]);

    if (loading) {
        return <h3>Loading...</h3>;
    }

    const exercises = data?.exercises || [];

    if (!exercises.length) {
        return <h3>You have nothing in your journal. Get started on your fitness journey by adding a nutrition or an exercise.</h3>
    }
    console.log(exercises);
    const workoutEmoji = 127947;
    const nutritionEmoji = '&#x1f3cb';
    return (
        <div className="journalContainer">
            <h3 className="journalBox">Journal</h3>
            <div style={styles.journalBox}>
                {exercises &&
                    exercises.map((exercise) => (
                        <div key={exercise._id} className="journalBox card mb-3">
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
                    <Link to="/dashboard" className="back-to-dashboard-button">Back to Dashboard</Link>
                </div>
        </div>
    )
};

export default Journal;



