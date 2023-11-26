import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_FITEVENTS } from '../utils/queries';

const styles = {
    fitEventsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#333',
        height: '70%',
        width: '70%',
        marginLeft: 20,
        fontSize: 14,
        borderRadius: 8,
    },
    fitEventRecord: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: '#3498db',
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
    fitEventFieldSmall: {
        height: '100%',
        width: '12%',
        fontSize: 14,
        textAlign: 'left',
        marginLeft: 10,
        marginRight: 10,
    },
    fitEventFieldLarge: {
        height: '100%',
        width: '18%',
        fontSize: 14,
        textAlign: 'left',
        marginLeft: 10,
        marginRight: 10,
    },
    fitEventFieldNull: {
        height: '100%',
        width: 0,
    },
}

const Journal = () => {
    const { loading, data, error } = useQuery(QUERY_FITEVENTS);

    useEffect(() => {
        console.log(data);
    }, [data]);

    if (loading) {
        return <h3>Loading...</h3>;
    }

    const fitEvents = data?.fitEvents || [];

    if (!fitEvents.length) {
        return <h3>You have nothing in your journal. Get started on your fitness journey by adding a nutrition or an exercise.</h3>
    }
    console.log(fitEvents);
    const workoutEmoji = 127947;
    const nutritionEmoji = '&#x1f3cb';
    return (
        <div>
            <h3>Journal</h3>
            <div style={styles.fitEventsContainer}>
                {fitEvents &&
                    fitEvents.map((fitEvent) => (
                        <div style={styles.fitEventRecord} key={fitEvent._id} className="card mb-3">
                            <div style={styles.fitEventFieldLarge}>{fitEvent.createdAt}</div>
                            <div style={styles.fitEventFieldSmall}>{fitEvent.fitEventType}{String.fromCharCode(workoutEmoji)}</div>
                            {fitEvent.goalReachedExercise ? <div style={styles.fitEventFieldSmall}>Green emoji - You Rock!</div> : <div style={styles.fitEventFieldSmall}>Red emoji - Almost There!</div>}
                            {fitEvent.exerciseId ? <div style={styles.fitEventFieldSmall}>Workout Name: {fitEvent.exerciseId.name}</div> : <div style={styles.fitEventFieldNull}></div>}
                            {fitEvent.exerciseId ? <div style={styles.fitEventFieldSmall}>Calories Burned: {fitEvent.exerciseId.caloriesBurned}</div> : <div style={styles.fitEventFieldNull}></div>}
                            {fitEvent.nutritionId ? <div style={styles.fitEventFieldSmall}>Food: {fitEvent.nutritionId.name}</div> : <div style={styles.fitEventFieldNull}></div>}
                            {fitEvent.nutritionId ? <div style={styles.fitEventFieldSmall}>Calories Consumed:{fitEvent.nutritionId.calories}</div> : <div style={styles.fitEventFieldNull}></div>}
                        </div>

                    ))}
            </div>
        </div>
    )
};

export default Journal;



