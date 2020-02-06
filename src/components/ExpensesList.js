import React, { useContext } from 'react';
import ExpenseDetails from './ExpenseDetails';
import { ExpenseContext } from '../contexts/ExpenseContext';

const ExpensesList = () => {
  const { expenses } = useContext(ExpenseContext);
  let total = 0;
  return expenses.length ? (
    <div className="expense-list">
      <ul>
        {expenses.map(expense => {
         total+=Number(expense.cost)
          return ( <ExpenseDetails expense={expense} key={expense.id} /> );
        })}
      </ul>
      <div className="total-expenses">Total ${total}</div>
    </div>
  ) : (
    <div className="empty">No Expenses Added.</div>
  );
}

export default ExpensesList;