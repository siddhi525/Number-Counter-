import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter, setCounter]= useState(0)
 

  //let counter= 5
  function addValue(){
     //counter=counter+1
     if(counter<20){
    setCounter(counter+1)
     }
  }

  function removeValue(){
    if(counter>0){
    setCounter(counter-1)
    }
  }

  return (
    <>
      <h1> Siddhi learning react</h1>
      <h3> Counter value: {counter}</h3>

      <button
      onClick={addValue} > Increment </button>
      <button onClick={removeValue}> Decrement </button>
    </>
  )
}

export default App
