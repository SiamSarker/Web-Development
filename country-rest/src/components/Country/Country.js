import React, { useState } from 'react';
import CountryDetails from '../CountryDetails/CountryDetails';
import './Country.css'


const Country = (props) => {
    const {area, region, name, flags} = props.country;

    const [data, setData] = useState([props.country]);

    const countryDetails = (country) => {
        // console.log(country);
        setData(country);
        console.log(data[0]);
        return (
            <div className='country2'>
                Hello world
                {/* <CountryDetails country={data[0]}></CountryDetails> */}
            </div>
        );
    }

    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={()=> {countryDetails(props.country)}}>Details</button>
        </div>
    );
};

export default Country;