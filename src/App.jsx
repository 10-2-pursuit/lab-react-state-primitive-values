import { useState, useEffect } from "react";

function App() {
  const [counter, scoreCounter] = useState(0);
  const [incrementor, setIncrementor] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (counter >= 100) {
      setGameOver(true);
    }
  }, [counter]);

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
    scoreCounter(0);
    setIncrementor(1);
    setGameOver(false)
  };

  return (
    <main>
      {gameOver ? (
        <div>
          <h2 className="game-score">Current Score: {counter} </h2>
          <h2>You Win!</h2>
          <button onClick={resetGame}>Play again?</button>
        </div>
      ) : (
        <div>
          <h2>Current Score: {counter} </h2>
          <button className="button1" onClick={scoreTrack}> +{incrementor}</button>
          <button className="button1" onClick={upgrade}>
            Pay 10 points to change from +{incrementor} to +{incrementor + 1}
          </button>
        </div>
      )}
    </main>
  );
}

export default App;