
import React, { useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';

import { FaRegTrashAlt } from "react-icons/fa";

const ExpenseDetails = ({ expense }) => {
  const { dispatch } = useContext(ExpenseContext);
  return (
    <li>
      <div className="col-md-12">
        <div className="row">
          <div className="card-content col-md-10">
            <div className="title">
              {expense.title}
            </div>
            <div className="cost">${expense.cost}</div>
          </div>
          <div className="card-right-items col-md-2">
            <div className="trash-icon">
              <FaRegTrashAlt onClick={() => dispatch({ type: 'REMOVE_EXPENSE', id: expense.id })}/>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ExpenseDetails;