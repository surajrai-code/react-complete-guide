
import React,{useState} from "react";
import ExpanseDate from './ExpanseDate';
import ExpanseDetails from './ExpanseDetails';
// import Expanses from './Expanses.js'
const ExpanseItem=(props)=>{
  const [amount,setAmount]=useState(props.amount)
  const UpdateAmount=()=>{
     setAmount(100)
  }
  useState()
  const DeleteItem=()=>{
 
  }
    return (
      <>
      <ExpanseDate date={props.date}/>
      <ExpanseDetails title={props.title}/>
      <ExpanseDetails amount={amount}/>
      <ExpanseDetails locationOfExpenditure={props.locationOfExpenditure}/>
      <button onClick={UpdateAmount}>UpdateAmount</button>
      <button onClick={DeleteItem}>DeleteItem</button>
      </>
    );
  }
  
  export default ExpanseItem;
