import React, {useState} from 'react';
import ExpanseDate from './ExpanseDate';
import ExpanseDetails from './ExpanseDetails';
import ExpensesFilter from './ExpensesFilter';
const Expanses=(props)=>{
    const [expanseAmount,setAmount]=useState(props.expanseAmount)
 const UpdateAmount=()=>{
    setAmount(100)
 }
 useState()
 const DeleteItem=()=>{

 }
 const [filteredYear, setFilteredYear] = useState('2020');

 const filterChangeHandler = (selectedYear) => {
   setFilteredYear(selectedYear);
 };
    return(
        <div className='expense-item'>
         <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
         <ExpanseDate expanseDate={props.expanse.expanseDate}/>
          <ExpanseDetails expanseTitle={props.expanse.expanseTitle}/>
          <ExpanseDetails expanseAmount={expanseAmount}/>
          <ExpanseDetails locationOfExpenditure={props.expanse.locationOfExpenditure}/>
          <button onClick={UpdateAmount}>UpdateAmount</button>
          <button onClick={DeleteItem}>DeleteItem</button>
      </div>
    );
}
export default  Expanses;