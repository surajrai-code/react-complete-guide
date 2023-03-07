import React,{useState} from 'react';


const ExpanseForm=()=>{
    const [amountHandle,setAmountHandel]=useState('')
    const [titleHandle,setTitleHandel]=useState('')
    const [dateHandle,setDateHandel]=useState('')
    const [locationHandle,setLocationHandel]=useState('')
    const amountHandler=(event)=>{
        setAmountHandel(event.target.value)
    }
    const dateHandler=(event)=>{
        setDateHandel(event.target.value)
    }
    const titleHandler=(event)=>{
        setTitleHandel(event.target.value)
    }
    const locationHandler=(event)=>{
        setLocationHandel(event.target.value)
    }
    return(
        <form>
            <div>
                <div>
                    <label>Amount</label>
                    <input type='number' onChange={amountHandler}/>
                </div>
                <div>
                    <label>title</label>
                    <input type='text' onChange={titleHandler}/>
                </div>
                <div>
                    <label>location</label>
                    <input type='text' onChange={locationHandler}/>
                </div>
                <div>
                    <label>date</label>
                    <input type='date' onChange={dateHandler}/>
                </div>
                <div>
                    <button type='submit'>Add new Item</button>
                </div>
            </div>
        </form>
    );
}
export default ExpanseForm;