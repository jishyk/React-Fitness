import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_NUTRITIONS } from '../utils/queries';
import { QUERY_TODAYNUTRITIONS } from '../utils/queries';

const styles = {
    TempContainer: {
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
    TempRecord: {
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
    TempStatusContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: '#3498db',
        color: '#333',
        height: '70%',
        width: '50%',
        marginLeft: 70,
        marginTop: 4,
        fontSize: 14,
        textAlign: 'left',
        border: '1px solid #000',
        borderRadius: 8,
    },
    TempStatusIndicator: {
        background: '#008000',
        color: '#ddd',
        height: '70%',
        width: '20%',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 4,
        merginBottom: 40,
        fontSize: 10,
        textAlign: 'center',
        border: '1px solid #000',
        borderRadius: 28,
    },
}

const TodayNutrition = ({ username }) => {
    const { loading, data, error } = useQuery(QUERY_TODAYNUTRITIONS, {
        variables: { username },
    });

    useEffect(() => {
        console.log(data);
    }, [data]);

    if (loading) {
        return <h3>Loading...</h3>;
    }

    const nutritions = data?.todayNutritions || [];

    if (!nutritions.length) {
        return <h3>You have not logged any calories yet today. Add a nutrition to get started!</h3>
    }
    console.log(nutritions);
    return (
        <div>
            <h3>Nutritions</h3>
            <div style={styles.TempStatusContainer}>
            <div>STATUS</div>
            <div style={styles.TempStatusIndicator}>Placeholder for success or fail emoji</div>
            <div>Placeholder for calories eaten</div>
            <div>Placeholder for max calories goal</div>
                </div>
            <div style={styles.TempContainer}>
                {nutritions &&
                    nutritions.map((nutrition) => (
                        <div style={styles.TempRecord} key={nutrition._id} className="card mb-3">
                            <div style={styles.TempFieldLarge}>{nutrition.createdAt}</div>
                            <div style={styles.TempFieldSmall}>{nutrition.name}</div>
                            <div style={styles.TempFieldSmall}>{nutrition.calories}</div>
                        </div>
                    ))}
            </div>
        </div>
    )
};

export default TodayNutrition;
