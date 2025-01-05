import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import FlightsForm from './components/FlightsForm';
import FlightResults from './components/FlightResults';
import './App.css';

const App = () => {
    const [flightResults, setFlightResults] = useState(null);

    return (
        <Router>
           <Routes>
            <Route 
                path="/"
                element = {<FlightsForm
                setFlightResults={setFlightResults}
                
            />}/>
            <Route
             path="/results"
             element={<FlightResults
             results={flightResults} />}
             />

        
        </Routes>
        </Router>
    );
};

export default App;
