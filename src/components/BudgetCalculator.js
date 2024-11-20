import React from 'react';

const BudgetCalculator = ({ destinations }) => {
    const totalBudget = destinations.reduce((sum, dest) => sum + dest.budget, 0);

    return (
        <div>
            <h3>Total Budget</h3>
            <p>${totalBudget.toFixed(2)}</p>
        </div>
    );
};

export default BudgetCalculator;
