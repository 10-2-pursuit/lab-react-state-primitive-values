import React , { useState } from "react";
import "./App.css";

function App() {
  const [currentScore, setScore] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);
  const [win, setWin] = useState(false);

  const incrementHandler = () => {
    setScore(currentScore + incrementValue);
    currentScore + incrementValue >= 100 ? setWin(true) : setWin(false);
  };

  const payButtonHandler = () => {
    currentScore >= 10
      ? (setScore(currentScore - 10), setIncrementValue(incrementValue + 1))
      : alert("You can't afford that!");
  };

  const playAgain = () => {
    setScore(0);
    setIncrementValue(1);
    setWin(false);
  };

  return (
    <div className="App">
      <h1>Clicker Game</h1>
      <h2>Current Score : {currentScore}</h2>
      {!win ? (
        <>
          <button onClick={incrementHandler}> + {incrementValue}</button>
          <button onClick={payButtonHandler}>
            { "Pay 10 points to change from +" + (incrementValue) + " to +" +
            (incrementValue + 1) + " "}
          </button>
        </>
      ) : (
        <>
          <h1>You Win!</h1>
          <button onClick={playAgain}>Play again?</button>
        </>
      )}
    </div>
  );
}

export default App;