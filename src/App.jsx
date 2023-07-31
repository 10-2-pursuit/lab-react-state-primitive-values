import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);
  const [victory, setVictory] = useState(false);

  const handleIncrement = () => {
    setScore(score + incrementValue);
    score + incrementValue >= 100 ? setVictory(true) : setVictory(false);
  };

  const handlePayBtn = () => {
    score >= 10
      ? (setScore(score - 10), setIncrementValue(incrementValue + 1))
      : alert("You can't afford that!");
  };

  const handlePlayAgainClick = () => {
    setScore(0);
    setIncrementValue(1);
    setVictory(false);
  };

  return (
    <div className="App">
      <h1>Clicker Game</h1>
      <p>Current Score : {score}</p>
      {!victory ? (
        <>
          <button onClick={handleIncrement}> + {incrementValue}</button>
          <button onClick={handlePayBtn}>
            Pay 10 points to change from + {incrementValue} to +{" "}
            {incrementValue + 1}{" "}
          </button>
        </>
      ) : (
        <>
          <h2>You Win!</h2>
          <button onClick={handlePlayAgainClick}>Play again?</button>
        </>
      )}
    </div>
  );
}

export default App;
