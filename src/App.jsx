import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, scoreCounter] = useState(99);
  const [incrementor, setIncrementor] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const scoreTrack = () => {
    scoreCounter(counter + incrementor);
  };

  const upgrade = () => {
    if (counter >= 10) {
      setIncrementor(incrementor + 1);
      scoreCounter(counter - 10);
    } else {
      return alert("You can't afford that!");
    }
  };

  const resetGame = () => {
    setGameOver(!gameOver)
    scoreCounter(0);
    setIncrementor(1);
  };

  return (
    <main>
      {gameOver ? (
        <div>
          <h2>You Win!</h2>
          <button onClick={resetGame}>Play again?</button>
        </div>
      ) : (
        <>
          <h2>Current Score: {counter} </h2>
          <button onClick={scoreTrack}> +{incrementor}</button>
          <button onClick={upgrade}>
            Pay 10 points to change from +{incrementor} to +{incrementor + 1}
          </button>
        </>
      )}
    </main>
  );
}

export default App;
