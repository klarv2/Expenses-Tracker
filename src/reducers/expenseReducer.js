import uuid from 'uuid/v4';

export const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, {
        title: action.expense.title, 
        cost: action.expense.cost, 
        id: uuid()}
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.id);
    default:
      return state;
  }
} 