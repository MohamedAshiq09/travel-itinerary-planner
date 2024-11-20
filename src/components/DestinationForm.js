import React, { useState } from 'react';

const DestinationForm = ({ addDestination }) => {
    const [name, setName] = useState('');
    const [budget, setBudget] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !budget) return alert('Please fill in all fields');
        addDestination({ name, budget: parseFloat(budget) });
        setName('');
        setBudget('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Destination</h3>
            <input
                type="text"
                placeholder="Destination Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Budget (in USD)"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default DestinationForm;
