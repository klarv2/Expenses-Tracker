import React from 'react';
import Navbar from './components/Navbar';
import ExpenseContextProvider from './contexts/ExpenseContext';
import ExpensesList from './components/ExpensesList';
import NewExpenseForm from './components/NewExpenseForm';

function App() {

  return (
    <div className="App">
      <ExpenseContextProvider>
        <Navbar />
        <NewExpenseForm />  
        <ExpensesList />
      </ExpenseContextProvider>
    </div>
  );
}

export default App;