import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_EXERCISES } from '../utils/queries';
import { QUERY_TODAYEXERCISES } from '../utils/queries';

const styles = {
    // TempContainer: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     color: '#333',
    //     height: '70%',
    //     width: '70%',
    //     marginLeft: 20,
    //     marginBottom: 60,
    //     fontSize: 14,
    //     borderRadius: 8,
    // },
    // TempRecord: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'flex-start',
    //     background: '#3498db',
    //     color: '#333',
    //     height: '70%',
    //     width: '100%',
    //     marginLeft: 0,
    //     marginTop: 4,
    //     fontSize: 14,
    //     textAlign: 'left',
    //     border: '1px solid #000',
    //     borderRadius: 8,
    // },
    entryBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#fff',
        color: '#333',
        width: '80%',
        marginTop: 20,
        marginBottom: 20,
        padding: 20,
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
    TempStatusContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // background: '#3498db',
        // color: '#333',
        // height: '70%',
        // width: '50%',
        // marginLeft: 20,
        marginTop: 20,
        // fontSize: 14,
        // textAlign: 'left',
        // border: '1px solid #000',
        // borderRadius: 8,
    },
    // TempStatusIndicator: {
    //     background: '#008000',
    //     color: '#ddd',
    //     height: '70%',
    //     width: '20%',
    //     marginLeft: 20,
    //     marginRight: 20,
    //     marginTop: 4,
    //     merginBottom: 40,
    //     fontSize: 10,
    //     textAlign: 'center',
    //     border: '1px solid #000',
    //     borderRadius: 28,
    // },
}

const TodayExercise = ({ username, workoutGoal }) => {
    const { loading, data, error, refetch } = useQuery(QUERY_TODAYEXERCISES, {
        variables: { username },
    });

    useEffect(() => {
        refetch();
    }, []);

    if (loading) {
        return <h3>Loading...</h3>;
    }

    const exercises = data?.todayExercises || [];

    if (!exercises.length) {
        return <div style={styles.TempStatusContainer}><h3>You have no exercises logged yet for today. Add an exercise to get started!</h3></div>
    }
    console.log(exercises);
    let calBurnedTotal = 0;
    for (let i = 0; i < exercises.length; i++) {
        calBurnedTotal += exercises[i].caloriesBurned;
    }
    console.log(calBurnedTotal);
    let calToGo = workoutGoal - calBurnedTotal;
    console.log(calToGo);

    let goalExerciseReached = false;
    if (calBurnedTotal >= workoutGoal) {
        goalExerciseReached = true;
    };
    console.log(workoutGoal);
    console.log(goalExerciseReached);


    return (
        <div className="entryBox">
            {/* <h3>Exercises</h3> */}
            {!workoutGoal ? (<div style={styles.TempStatusContainer}>
                <div className="entryBox">
                    <h3>SET A GOAL TO TRACK YOUR PROGRESS</h3>
                </div>
            </div>) : (
                <div style={styles.TempStatusContainer}>
                    <div className="entryBox">
                        {/* <h3>STATUS</h3> */}
                    </div>
                    {goalExerciseReached ? (
                        <div className="TempStatusIndicator entryBox">SUCCESS</div>
                    ) : (
                        <div className="TempStatusIndicator entryBox">FAIL</div>
                    )}
                    {goalExerciseReached ? (
                        <div></div>
                    ) : (
                        <div className="TempFieldSmall entryBox">Calories to go: {calToGo}</div>
                    )}
                    <div className="TempFieldSmall entryBox"> Calories: {calBurnedTotal}/{workoutGoal}</div>
                </div>)}
            <div style={styles.TempContainer}>
                {exercises &&
                    exercises.map((exercise) => (
                        <div style={styles.entryBox} key={exercise._id} className="entryBox card mb-3">
                            <div style={styles.TempFieldLarge}>{exercise.createdAt}</div>
                            <div style={styles.TempFieldSmall}>{exercise.name}</div>
                            <div style={styles.TempFieldSmall}>{exercise.workoutLength}</div>
                            <div style={styles.TempFieldSmall}>{exercise.caloriesBurned}</div>
                            <div style={styles.TempFieldSmall}>{exercise.feeling}</div>
                        </div>
                    ))}
            </div>
        </div>
    )
};

export default TodayExercise;
