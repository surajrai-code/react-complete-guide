import logo from './logo.svg';
import React from 'react';
import Expanses from './component/Expanses/Expanses';
import './App.css';
// import ExpanseItem from './component/Expenses/ExpanseItem';
import NewExpanse from './component/newExpanse/NewExpanse';

      const Dummydata=[
        {
          id: 'a',
      date:new Date(2023,2,3),
      title:'bike',
      amount:23400,
      locationOfExpenditure:'patna' 
        },
        {
          id: 'b',         
           date:new Date(2023,2,2),
          title:'car',
          amount:2347533,
          locationOfExpenditure:'chennai' 
            },
            {
              id:'c',
              date:new Date(2023,2,6),
              title:'mobile',
              amount:23400,
              locationOfExpenditure:'mumbai' 
                },
                {
                  id:'d',
                  date:new Date(2023,2,7),
                  title:'laptop',
                  amount:234786,
                  locationOfExpenditure:'Delhi' 
                    }
  ];
  const App=()=>{
    const [expanses,setExpanseItem]=React.useState(Dummydata)
  
             const addExpanseHandler=expanse=>{
              setExpanseItem((prevExpanse)=>{
                return([expanse,...prevExpanse]);
              })
             }
  
          return (
            <div>
              <NewExpanse onAddExpanse={addExpanseHandler}/>
              <Expanses Dummydata={expanses} />
            </div>
          );
  }
  
  export default App;