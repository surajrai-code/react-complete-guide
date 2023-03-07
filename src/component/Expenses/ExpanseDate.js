import React from 'react';
import  './ExpanseDate.css'
  const ExpanseDate=(props)=>{
  const month =props.expanseDate.toLocaleString('en-US', { month: 'long' });
  const day = props.expanseDate.toLocaleString('en-US', { day: '2-digit' });
  const year = props.expanseDate.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpanseDate;