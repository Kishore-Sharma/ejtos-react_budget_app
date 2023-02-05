
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, totalExpenses, currency } = useContext(AppContext);

    const MAX_BUDGET_VALUE = 2000;

    const onChangeBudgetHandler = (event) => {
        const value = Number(event.target.value);

        // check if the entered value is a number
        if (Number.isNaN(value)) {
            alert('Please enter a valid number.');
            return;
        }
    
        // check if the entered value is an integer number
        if (!Number.isInteger(value)) {
            alert('Please enter an integer number.');
            return;
        }

        if(value < totalExpenses) {
            alert("The value of the buget can't be lower than the expenses value " +
            "£" +
            totalExpenses);
        }

        if(value > MAX_BUDGET_VALUE) {
            alert('Please enter a value less that ' + MAX_BUDGET_VALUE);
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        })
        
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    style={{ size: 10 }}
                    step={10}
                    max={20000}
                    onChange={(event) => onChangeBudgetHandler(event)}>
                </input>

            </span>
        </div>
    );
};

export default Budget;