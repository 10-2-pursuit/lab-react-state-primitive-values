import React, { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1);

  const handleClick = () => {
    setScore((prevScore) => prevScore + increment);
  };

  const handleUpgrade = () => {
    if (score >= 10) {
      setScore((prevScore) => prevScore - 10);
      setIncrement((prevIncrement) => prevIncrement + 1);
    } else {
      alert("You can't afford that!");
    }
  };

  const handleRestart = () => {
    setScore(0);
    setIncrement(1);
  };

  return (
    <div className="App">
      {score >= 100 ? (
        <div>
          <h2>You Win!</h2>
          <button onClick={handleRestart}>Play again?</button>
        </div>
      ) : (
        <div>
          <p>Current Score: {score}</p>
          <button class="button" onClick={handleClick}>+{increment}</button>
          <button onClick={handleUpgrade}>
            Pay 10 points to change from +{increment} to +{increment + 1}
          </button>
        </div>
      )}
    </div>
  );
}
