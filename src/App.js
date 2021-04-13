import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Clock from './Clock'
const App = (props) => {
  const [ isClockStarted, setIsClockStarted ] = useState(false)
  return (
    <div className="App">
      <header className="App-header">

        {isClockStarted && <Clock />}

        <button
          onClick={() => setIsClockStarted(!isClockStarted)}
        
        >{isClockStarted ? 'hide': 'show'}</button>
    
      </header>
    </div>
  );
}

export default App;

// 1- A button is clicked
// 2- We change the value of the state
// ____> setIsClockStarted()