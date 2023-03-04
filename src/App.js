import logo from './logo.svg';
import './App.css';
import ExpanseItem from './component/ExpanseItem';
function App() {
      const expanseItem=[
        {
      expanseDate:'2-3-2023',
      expanseTitle:'bike',
      expanseAmount:23400,
      locationOfExpenditure:'patna' 
        },
        {
          expanseDate:'2-2-2023',
          expanseTitle:'car',
          expanseAmount:2347533,
          locationOfExpenditure:'chennai' 
            },
            {
              expanseDate:'2-6-2023',
              expanseTitle:'mobile',
              expanseAmount:23400,
              locationOfExpenditure:'mumbai' 
                },
                {
                  expanseDate:'2-6-2023',
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
