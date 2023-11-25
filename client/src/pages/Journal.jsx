import React from "react";
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_FITEVENTS } from '../utils/queries';

const Journal = () => {
    const { loading, data } = useQuery(QUERY_FITEVENTS);   
    const fitEvents = data?.fitEvents || [];

    if (!fitEvents.length) {
        return <h3>You have nothing in your journal. Get started on your fitness journey by adding a nutrition or an exercise.</h3>
    }
console.log(fitEvents);
    return (
        <div>
            <h3>Journal</h3>
                {fitEvents && 
                fitEvents.map((fitEvent) => (
                    <div key={fitEvent._id} className="card mb-3">
                       <h4>{fitEvent.fitEventType}</h4>
                       </div>
                
                ))}
        </div>
    )
};

export default Journal;



// <div key={fitEvent._id} className="card mb-3">
//                        <h4>{fitEvent.createdAt}</h4>
//                        <h4>{fitEvent.fitEventType}</h4>
//                        <h4>{fitEvent.exerciseId.name}</h4>
//                        <h4>{fitEvent.exerciseId.caloriesBurned}</h4>
//                        <h4>{fitEvent.nutritionId.name}</h4>
//                        <h4>{fitEvent.nutritionId.calories}</h4>  
//                        </div>