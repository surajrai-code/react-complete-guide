import logo from './logo.svg';
import './App.css';
import ExpanseItem from './component/Expnses/ExpanseItem';
const App=()=>{
      const expanseItem=[
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
  ]
          return (
            <div>
              <h2>Let's get started!</h2>
              <ExpanseItem expanseItem={expanseItem} />
            </div>
          );
  }
  
  export default App;
