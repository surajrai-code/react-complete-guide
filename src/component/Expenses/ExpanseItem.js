
import React from "react";
import Expance from './Expanses.js'
const ExpanseItem=(props)=>{
    return (
      
      props.expanseItem.map((expanse,index)=>{
        return <Expance expanse={expanse} key={index}/>
      })
      
    );
  }
  
  export default ExpanseItem;
