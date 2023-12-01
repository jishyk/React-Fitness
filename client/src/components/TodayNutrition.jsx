import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_NUTRITIONS } from '../utils/queries';
import { QUERY_TODAYNUTRITIONS } from '../utils/queries';

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
        // marginLeft: 70,
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

const TodayNutrition = ({ username, nutritionGoal }) => {
    const { loading, data, error, refetch } = useQuery(QUERY_TODAYNUTRITIONS, {
        variables: { username },
    });

    useEffect(() => {
        refetch();
    }, []);

    if (loading) {
        return <h3>Loading...</h3>;
    }

    const nutritions = data?.todayNutritions || [];

    if (!nutritions.length) {
        return <div style={styles.TempStatusContainer}><h3>You have not logged any calories yet today. Add a nutrition to get started!</h3></div>
    }
    console.log(nutritions);
    let calConsumedTotal = 0;
    for (let i = 0; i < nutritions.length; i++) {
        calConsumedTotal += nutritions[i].calories;
    }
    console.log(calConsumedTotal);
    let caloriesLeft = nutritionGoal - calConsumedTotal;
    console.log(caloriesLeft);

    let goalCaloriesReached = false;
    if (nutritionGoal >= calConsumedTotal) {
        goalCaloriesReached = true;
    };
    console.log(nutritionGoal);
    console.log(goalCaloriesReached);
    return (
        <div className="entryBox">
            {/* <h3>Nutritions</h3> */}
            {!nutritionGoal ? (<div style={styles.TempStatusContainer}>
                <div className="entryBox">
                <h3>SET A GOAL TO TRACK YOUR PROGRESS</h3>
            </div>
            </div>) : (
                <div style={styles.TempStatusContainer}>
                <div>
                    {/* <h3>STATUS</h3> */}
                    </div>
                    {goalCaloriesReached ? (
                        <div className="TempStatusIndicator success entryBox">SUCCESS</div>
                        ) : (
                            <div className="TempStatusIndicator fail entryBox">FAIL</div>
                    )}
                    {goalCaloriesReached ? (
                        <div></div>
                    ) : (
                        <div className="TempFieldSmall entryBox">Calories over: {caloriesLeft}</div>
                    )}
                    <div className="TempFieldSmall entryBox"> Calories: {calConsumedTotal}/{nutritionGoal}</div>
                </div>)}
            <div style={styles.TempContainer}>
                {nutritions &&
                    nutritions.map((nutrition) => (
                        <div style={styles.entryBox} key={nutrition._id} className="entryBox card mb-3">
                        <h3>Meal Name: <span>{nutrition.name}</span></h3>
                        <p>Calories: <span>{nutrition.calories}</span></p>
                        <div style={styles.TempFieldLarge}>{nutrition.createdAt}</div>
                        </div>
                    ))}
            </div>
        </div>
    )
};

export default TodayNutrition;
