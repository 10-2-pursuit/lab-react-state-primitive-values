import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  let [increment, setIncrement] = useState(1);

  const addScore = () => {
    setCounter((counter += increment));
    counter > 99 ? alert("You have won!") : null;
  };

  const addIncrement = () => {
    counter > 9
      ? (setCounter(counter - 10), setIncrement(increment + 1))
      : alert("You can't afford that!");
  };

  return (
    <main>
      <h2>Current Score: {counter}</h2>
      <button onClick={addScore}>+{increment}</button>
      <br />
      <button onClick={addIncrement}>
        Pay 10 points to change from +{increment} to +{increment + 1}
      </button>
    </main>
  );
}

export default App;
