import React, {useState} from 'react';
import ExpanseDate from './ExpanseDate';
import ExpanseDetails from './ExpanseDetails';
const Expanses=(props)=>{
    const [expanseAmount,setAmount]=useState(props.expanseAmount)
 const UpdateAmount=()=>{
    setAmount(100)
 }
    return(
        <div className='expense-item'>
         <ExpanseDate expanseDate={props.expanse.expanseDate}/>
          <ExpanseDetails expanseTitle={props.expanse.expanseTitle}/>
          <ExpanseDetails expanseAmount={expanseAmount}/>
          <ExpanseDetails locationOfExpenditure={props.expanse.locationOfExpenditure}/>
          <button onClick={UpdateAmount}>UpdateAmount</button>
      </div>
    );
}
export default  Expanses;