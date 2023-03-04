import React from 'react';

export default function Expance(props){
    console.log(props)
    return(
           <div className='expense-item'>
         <div>{props.expanse.expanseDate}</div> 
        <div className='expense-item__description'>
        {props.expanse.expanseTitle}</div>
          <div className='expense-item__price'>${props.expanse.expanseAmount}</div>
          <div className="expense-location">{props.expanse.locationOfExpenditure}</div>
      </div>
    );
}