import React, { useState } from 'react';
import DestinationForm from './components/DestinationForm';
import DestinationList from './components/DestinationList';
import BudgetCalculator from './components/BudgetCalculator';
import MapView from './components/MapView';
import './assets/styles.css';

const App = () => {
    const [destinations, setDestinations] = useState([]);

    const addDestination = (destination) => {
        setDestinations([...destinations, destination]);
    };

    return (
        <div className="container">
            <h1>Travel Itinerary Planner</h1>
            <DestinationForm addDestination={addDestination} />
            <DestinationList destinations={destinations} />
            <BudgetCalculator destinations={destinations} />
            <MapView destinations={destinations} />
        </div>
    );
};

export default App;
