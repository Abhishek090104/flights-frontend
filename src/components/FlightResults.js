import React from 'react';
import {useNavigate} from 'react-router-dom';
const FlightResults = ({ results }) => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Flight Prices</h2>
            {results ? (
                <ul>
                    {Object.entries(results).map(([airline, price], index) => (
                        <li key={index}>
                            {airline}: {price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results available.</p>
            )}
            <button
               onClick = {()=>
               navigate('/')
               }
            >Back to Home</button>
        </div>
    );
};

export default FlightResults;
