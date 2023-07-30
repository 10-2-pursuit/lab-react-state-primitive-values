import React from "react";
import "./App.css";
import { useState } from 'react'



const initialState = {
  clicks: { amount: 0 },
  auto: { cost: 10, amount: 0 },
};

function App () {
  const [counter,setCounter] = useState(0);
    return (
      <main>
        <p>{counter} namen</p>
        <div>
        <button onClick={counter}>Counter</button>
        </div>
       
      </main>
    );
}

export default App;
