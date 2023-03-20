import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const number = 5555;
const singer = {name: 'Dr. Mahfuz', job: 'Singer'}
const singer2 = {name: 'Eva', job: 'Singer'}

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  const Cricketers = [
    {name: 'Sakib Al Hasan', pos: 'All-Rounder'},
    {name: 'Liton Dash', pos: 'Wk & Batsman'},
  ]

  const Professors = [
    {name: 'Salek', pos: 'Professor'},
    {name: 'Hasan', pos: 'Lecturer'},
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>

        {Cricketers.map(cricketer => <Cricketer name={cricketer.name} pos={cricketer.pos}></Cricketer>)}

        <Counter></Counter>

        {Professors.map(Pro => <Professor name={Pro.name} pos={Pro.pos}></Professor>)}
        
        <div className="music">
          <p>Name: {number}</p>
          <p style={singerStyle}>Name: {singer.name} Job: {singer.job}</p>
          <p style={{color: 'blue', backgroundColor: 'yellow'}}>Name: {singer2.name} Job: {singer2.job}</p>
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      
    </div>
  );
}

function Cricketer(props) {
  console.log(props);
  return (
    <div className="container">
      <h1>Name: {props.name}</h1>
      <p>Profession: {props.pos}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(23);
  console.log(count, setCount);
  const Increase = () => setCount(count + 1);
  const Decrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      
    </div>
  )
}



function Professor(props) {
  // console.log(props);
  return (
    <div className="container2">
      <h1>Name: {props.name}</h1>
      <p>Profession: {props.pos}</p>
    </div>
  )
}

export default App;
