import { useState } from 'react';

import './App.css';

function App() {

  let [counter , setCounter ] = useState(15)


//  let counter = 15;
 const addValue = () =>{
   counter = counter + 1;
  setCounter(counter)
  
 }

 let removeValue= ()=>{
  counter = counter - 1;
  setCounter(counter)
 }
  return (
    <>
      <h1> Saima or code</h1>
      <h2> Counter Value: {counter}</h2>

      <button
      onClick ={addValue}> Add value {counter}</button>
      <br />
      <button
      onClick = {removeValue}> Remove value  {counter}</button>
      <p> footer:{counter} </p>
    </>
  )
}

export default App
