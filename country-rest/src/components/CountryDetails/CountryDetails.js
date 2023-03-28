import React from 'react';
import './CountryDetails.css'

const CountryDetails = (props) => {
    console.log(props.country);
    
    

    return (
        <div className='country-details'>
            {/* <h2>Name: {props.name.common}</h2>
            <img src={props.flags.png} alt=""/>
            <p>Area: {props.area}</p>
            <p><small>Region: {props.region}</small></p> */}
        </div>
    );
};

export default CountryDetails;