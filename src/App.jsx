import React from "react";
import "./App.css";
import { useState } from 'react'

function App () {
  const [counter,setCounter] = useState(0);
  function handleClick(){
    setCounter(counter+10000);
  }
    return (
      <main>
        <p>{counter} namen</p>
        <div>
        <button onClick={handleClick}>Counter</button>
        </div>
       
      </main>
    );
}

export default App;
