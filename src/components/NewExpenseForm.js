import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';
import { FaPlus} from "react-icons/fa";
import Modal from 'react-modal';

const NewExpenseForm = () => {
  const { dispatch } = useContext(ExpenseContext);
  const [title, setTitle] = useState('');
  const [cost, setCost] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
const handleSubmit = (e) => {
e.preventDefault();
dispatch({ type: 'ADD_EXPENSE', expense: { title, cost }});
setTitle('');
setCost(0);
setIsOpen(false)
}

const ExpenseformAddButton = () => {
  const styles = {
    position:'absolute',
    right: '5vh',
    marginTop: '-90px',
    color:'#fff',
    fontSize: '2em'
  }
  return(
    <FaPlus style={styles} onClick={(e) => setIsOpen(true)}/>
  )
}
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

  return (
      <div className="content">
        <ExpenseformAddButton />
        <Modal style={customStyles} isOpen={isOpen}>
          <div className="header">
            <h1>Add New Expense</h1>
          </div>
          <form className="add-expense-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add New Expense" value={title}
                onChange={(e) => setTitle(e.target.value)} required />
            <div className="input-group"> 
            <span className="input-group-addon">$</span>
              <input type="number" placeholder="Cost" value={cost}
                onChange={(e) => setCost(e.target.value)} required />
            </div>
            <button type="submit" className="btn button-add">Archive Expense</button>
          </form>
        </Modal>
    </div>
  );
}
Modal.setAppElement('#root');
 
export default NewExpenseForm;