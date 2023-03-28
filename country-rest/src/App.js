import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Countries from './components/Countries/Countries';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      
        <CountryDetails></CountryDetails>
        <Countries/>
        

        
      
    </div>
  );
}

export default App;
