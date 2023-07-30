import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  let [increment, setIncrement] = useState(1);

  const addScore = () => {
    setCounter((counter += increment));
  };

  const addIncrement = () => {
    setCounter(counter - 10);
    setIncrement(increment + 1);
  };

  return (
    <main>
      <h2>Current Score: {counter}</h2>
      <button onClick={addScore}>+{increment}</button>
      <br />
      <button onClick={addIncrement}>
        Pay 10 Points To Change From +{increment} To +{increment + 1}
      </button>
    </main>
  );
}

export default App;
