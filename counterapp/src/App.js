import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [counter,setCounter]= useState(5)


 // let counter = 5
  const addValue = () =>{
    // counter = counter + 1
    console.log("value added", Math.random())
    setCounter(counter + 1)
  }

  const Removeval = () =>{
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={Removeval}>Remove value</button>
    </>
  );
}

export default App;
