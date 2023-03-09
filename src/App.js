import logo from './logo.svg';
import React from 'react';

import './App.css';
import ExpanseItem from './component/Expenses/ExpanseItem';
import NewExpanse from './component/newExpanse/NewExpanse';

      const Dummydata=[
        {
          id: 'a',
      expanseDate:new Date(2023,2,3),
      expanseTitle:'bike',
      expanseAmount:23400,
      locationOfExpenditure:'patna' 
        },
        {
          id: 'b',         
           expanseDate:new Date(2023,2,2),
          expanseTitle:'car',
          expanseAmount:2347533,
          locationOfExpenditure:'chennai' 
            },
            {
              id:'c',
              expanseDate:new Date(2023,2,6),
              expanseTitle:'mobile',
              expanseAmount:23400,
              locationOfExpenditure:'mumbai' 
                },
                {
                  id:'d',
                  expanseDate:new Date(2023,2,7),
                  expanseTitle:'laptop',
                  expanseAmount:234786,
                  locationOfExpenditure:'Delhi' 
                    }
  ];
  const App=()=>{
    const [expanseItem,setExpanseItem]=React.useState(Dummydata)
  
             const addExpanseHandler=expanseItem=>{
              setExpanseItem((prevExpanseItem)=>{
                return([expanseItem,...prevExpanseItem]);
              })
             }
  
          return (
            <div>
              <NewExpanse onAddExpanse={addExpanseHandler}/>
              <ExpanseItem Dummydata={Dummydata} />
            </div>
          );
  }
  
  export default App;