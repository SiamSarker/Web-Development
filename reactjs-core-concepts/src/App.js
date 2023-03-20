import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {name: 'Dr. Mahfuz', job: 'Singer'}
const singer2 = {name: 'Eva', job: 'Singer'}

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>

        <Cricketer name='Sakib Al Hasan' pos='All-Rounder'></Cricketer>
        <Cricketer name='Liton Dash' pos='Wk & Batsman'></Cricketer>


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

        <Professor name='Dr Salek' pos='Professor'></Professor>
        <Professor name='Abir Hossain' pos='Lecturer'></Professor>

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
