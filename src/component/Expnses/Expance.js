import React from 'react';
import ExpanseDate from './ExpanseDate';
import ExpanseDetails from './ExpanseDetails';
import ExpanseItem from './ExpanseItem';
const Expance=(props)=>{
  const [expanseItem, setList] = React.useState(props.expanseItem);

  const DeleteItem=(id)=>{

    const newList = expanseItem.filter((props) => props.id !== id);

    setList(newList);
  }
    
    return(
           <div className='expense-item'>
         <ExpanseDate expanseDate={props.expanse.expanseDate}/>
          <ExpanseDetails expanseAmount={props.expanse.expanseAmount}/>
          <ExpanseDetails expanseTitle={props.expanse.expanseTitle}/>
          <ExpanseDetails locationOfExpenditure={props.expanse.locationOfExpenditure}/>
          <button type='button' onClick={()=>DeleteItem(props.id)}>Delete Expance</button>
      </div>
    );
}
export default  Expance;