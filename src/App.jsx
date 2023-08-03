import React, { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(0);
  let [increment, setIncrement] = useState(1);

  const addScore = () => {
    setCounter((counter += increment));
  };

  const addIncrement = () => {
    counter > 9
      ? (setCounter(counter - 10), setIncrement(increment + 1))
      : alert("You can't afford that!");
  };

  const resetGame = () => {
    setCounter((counter = 0));
    setIncrement((increment = 1));
  };

  return (
    <main>
      <h2>Current Score: {counter}</h2>
      {counter < 99 ? (
        <>
        <button onClick={addScore}>+{increment}</button>
          <p></p>
          <button onClick={addIncrement}>
            Pay 10 points to change from +{increment} to +{increment + 1}
          </button>
        </>
      ) : (
        <>
          <h2>You have won!</h2>
          <button onClick={resetGame}>Play again?</button>
        </>
      )}
    </main>
  );
      }