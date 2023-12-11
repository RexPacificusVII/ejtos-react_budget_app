import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
        const newBudgetValue = parseInt(event.target.value, 10);
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

        if (!isNaN(newBudgetValue)) {
            if (newBudgetValue < totalExpenses) {
                alert("You cannot reduce the budget value lower than the spending.");
            } else if (newBudgetValue > 20000) {
                alert(`The value cannot exceed ${currency}20000.`);
            } else {
                dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
            }
        } else {
            alert("Please enter a valid number for the budget.");
        }
    }

    return (
        <div className='alert alert-secondary d-flex flex-nowrap align-items-center'>
            <div className='col-auto'>Budget: {currency}</div>
            <div className='col'>
                <input type="number" step="10" value={budget} onChange={handleBudgetChange} className=''></input>
            </div>
        </div>
    );
};

export default Budget;
