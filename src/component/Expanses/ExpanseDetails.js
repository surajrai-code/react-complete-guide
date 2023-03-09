import React from 'react';
import './ExpanseDetails.css'
const ExpanseDetails=(props)=>{
    const title=props.title
    const amount=props.amount
    const location=props.locationOfExpenditure
    
    return(

            <div className='expense-item'>
                <div className='expense-item__description'>{title}</div>
                <div className='expense-item__location'>{location}</div>
                <div className='expense-item__price'>{amount}</div>
            </div>
            
             
    );

}
export default  ExpanseDetails;