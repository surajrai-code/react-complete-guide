import React, {useState} from 'react';
// import ExpanseItem from './ExpanseItem';
import ExpanseChart from './ExpanseChart';
import ExpanseList from './ExpanseList';
// import ExpanseDate from './ExpanseDate';
// import ExpanseDetails from './ExpanseDetails';

import ExpensesFilter from './ExpensesFilter';
const Expanses=(props)=>{

 const [filteredYear, setFilteredYear] = useState('2023');

 const filterChangeHandler = (selectedYear) => {
   setFilteredYear(selectedYear);
 };
 const filteredExpenses = props.Dummydata.filter((expanses) => {
    return expanses.date.getFullYear().toString() === filteredYear;
  });
    return(
        <div className='expense-item'>
         <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}/>

          <ExpanseChart expanses={filteredExpenses} />
          <ExpanseList Dummydata={filteredExpenses} />
         
      </div>
    );
}
export default  Expanses;