import React from 'react';

const ExpanseDetails=(props)=>{
    const title=props.expanseTitle
    const amount=props.expanseAmount
    const location=props.locationOfExpenditure

    return(
            <div>
                <div>{title}</div>
                <div>{amount}</div>
                <div>{location}</div>
            </div>
    );

}
export default  ExpanseDetails;