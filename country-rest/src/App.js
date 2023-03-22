import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Country Details</h1>
      <section>
        <CountryDetails></CountryDetails>
        <CountryContainer></CountryContainer>
      </section>
    </div>
  );
}


function CountryContainer() {
  const [countries, setCoutries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCoutries(data));
  }, [])

  return (
    <div id='countryContainer'>
      {
        countries.map(country =>
          <div className='country'>
            <p>Country Name: {country.name.common}</p>
            <p>Capital: {country.capital ? country.capital[0] : 'No Capital'}</p>
            <button onClick={() => CountryDetails(country)}>Details</button>
          </div>)
      }
    </div>
  )
}

function CountryDetails(props) {
  console.log(props.name?.common);
  return (
    <div className='country'>      
      <p>Country Name: {props?.name?.common && (
 <h1>{props.name.common}</h1>
)}</p>   
      <img src="{props.flags.png}" alt="" />
    </div>
  )
}

export default App;
