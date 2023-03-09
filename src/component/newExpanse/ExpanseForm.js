import React,{useState} from 'react';

import './ExpanseForm.css'
const ExpanseForm=(props)=>{
    const [amountHandle,setAmountHandel]=useState()
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
    const submitHandler=(event)=>{
            event.preventDefault();
            const enterData={

                amount:amountHandle,
                title:titleHandle,
                date:new Date(dateHandle),
                location:locationHandle
            }
            // console.log(enterData);
            props.onSaveExpanseData(enterData);
            setAmountHandel('');
            setTitleHandel('');
            setLocationHandel('');
            setDateHandel('');

    }

    return(
        <form onSubmit={submitHandler}>
            
                
                <div className='new-expense__controls'>
                 <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' 
                    value={amountHandle}
                    onChange={amountHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>title</label>
                    <input type='text' value={titleHandle} onChange={titleHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>location</label>
                    <input type='text' value={locationHandle} onChange={locationHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>date</label>
                    <input type='date' value={dateHandle} onChange={dateHandler}/>
                </div>
                <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add new Item</button>
                </div>
            </div>
        </form>
    );
}
export default ExpanseForm;