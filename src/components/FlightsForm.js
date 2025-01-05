import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FlightsForm = ({ setFlightResults }) => {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [passengers, setPassengers] = useState(1);
     

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://flight-price-api-bv1y.onrender.com', {
                source,
                destination,
                date,
                passengers,
            });

            const response = await axios.get('http://localhost:5000/api/prices');
            setFlightResults(response.data);
            navigate('/results')
        } catch (error) {
            console.error('Error fetching flight prices:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        Enter City Name:
        <br></br> <input type="text" placeholder="Source" value={source} onChange={(e) => setSource(e.target.value)} required /><br></br>
            <br></br>
        Enter destination City:
        <br></br> <input type="text" placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} required /><br></br>
            <br></br>
        Choose the travelling date:
        <br></br><input type="date" value={date} onChange={(e) => setDate(e.target.value)} required /><br></br>
            <br></br>
        No.Of Passengers:
        <br></br> <input type="number" placeholder="Passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} min="1" /><br></br>
            <br></br>
            <button type="submit">Get Prices</button>
        </form>
    );
};

export default FlightsForm;
