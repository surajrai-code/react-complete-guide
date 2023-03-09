import React from 'react';
import ExpanseForm from './ExpanseForm';
const NewExpanse=(props)=>{
    const saveExapnseHandler=(enterData)=>{
            const expanseData={
                ...enterData,
                id: Math.random().toString()
            }
            
            props.onAddExpanse(expanseData);
    }
    return(
        <div>
            <ExpanseForm onSaveExpanseData={saveExapnseHandler} />
        </div>
    );
}
export default NewExpanse;