import React, { useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';

const Navbar = () => {
  const { expenses } = useContext(ExpenseContext);
  return (
    <div className="navbar col-md-12 center">
      <div className="row col-md-12 center">

        <h1>Expenses Tracker</h1>
        <p>Currently you have <span>{expenses.length}</span> expenses</p>
      </div>
    </div>
  );
}
 
export default Navbar;