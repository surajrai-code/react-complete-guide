import React from 'react';

import ExpanseItem from './ExpanseItem';
// import './ExpensesList.css';

const ExpanseList = (props) => {
  if (props.Dummydate === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }
  return (
    <ol className='expenses-list'>
       {props.Dummydata.map((expanses)=>
          <ExpanseItem date={expanses.date}
            amount={expanses.amount}
            title={expanses.title}
            location={expanses.locationOfExpenditure}
          />)}
    </ol>
  );
};

export default ExpanseList;