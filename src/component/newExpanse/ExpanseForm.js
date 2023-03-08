import React,{useState} from 'react';


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
            <div>
                <div>
                    <label>Amount</label>
                    <input type='number' 
                    value={amountHandle}
                    onChange={amountHandler}/>
                </div>
                <div>
                    <label>title</label>
                    <input type='text' value={titleHandle} onChange={titleHandler}/>
                </div>
                <div>
                    <label>location</label>
                    <input type='text' value={locationHandle} onChange={locationHandler}/>
                </div>
                <div>
                    <label>date</label>
                    <input type='date' value={dateHandle} onChange={dateHandler}/>
                </div>
                <div>
                    <button type='submit'>Add new Item</button>
                </div>
            </div>
        </form>
    );
}
export default ExpanseForm;