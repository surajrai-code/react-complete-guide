import React,{useState} from 'react';
import ExpanseForm from './ExpanseForm';
const NewExpanse=(props)=>{
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expanseData = {
        ...enteredExpenseData,
        id: Math.random().toString(),
      };
      props.onAddExpense(expanseData);
      setIsEditing(false);
    };
  
    const startEditingHandler = () => {
      setIsEditing(true);
    };
  
    const stopEditingHandler = () => {
      setIsEditing(false);
    };
  
    return (
      <div className='new-expense'>
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Expanse</button>
        )}
        {isEditing && (
          <ExpanseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    );
}
export default NewExpanse;