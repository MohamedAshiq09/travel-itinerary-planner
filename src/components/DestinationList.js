import React from 'react';

const DestinationList = ({ destinations }) => (
    <div>
        <h3>Itinerary</h3>
        <ul>
            {destinations.map((dest, index) => (
                <li key={index}>
                    {dest.name} - ${dest.budget.toFixed(2)}
                </li>
            ))}
        </ul>
    </div>
);

export default DestinationList;
