import React from 'react';

export default ExpanseDate=(props)=>{

  const month =props.expanseDate.toLocaleString('en-US', { month: 'long' });
  const day = props.expanseDate.toLocaleString('en-US', { day: '2-digit' });
  const year = props.expanseDate.getFullYear();
  console.log(month)

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}