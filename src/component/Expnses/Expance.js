import React from 'react';
import ExpanseDate from './ExpanseDate';
import ExpanseDetails from './ExpanseDetails';
const Expance=(props)=>{
    console.log(props)
    return(
           <div className='expense-item'>
         <ExpanseDate expanseDate={props.expanse.expanseDate}/>
          <ExpanseDetails expanseAmount={props.expanse.expanseAmount}/>
          <ExpanseDetails expanseTitle={props.expanse.expanseTitle}/>
          <ExpanseDetails locationOfExpenditure={props.expanse.locationOfExpenditure}/>
      </div>
    );
}
export default  Expance;