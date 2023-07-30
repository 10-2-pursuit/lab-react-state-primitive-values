import React from "react";
import { useState } from "react";
import "./App.css";

function App () {
  function addToScore(){
    setScore(score + increment); 
  }

  function upgradeIncrement(){
    if(score>= 10){
      setIncrement(increment + 1); 
      setScore(score - 10);
    }
    else{ 
      alert("You can't afford that!");
    }
  }
function reset() {
  setScore(0);
  setIncrement(1);
}

const [score, setScore] = useState(0);
const [increment, setIncrement] = useState(1);


    return (
      <main>
        <h1>Current Score: {score} </h1>
        {score <100 ? (
          <div>
            <button onClick= {addToScore}>+{increment}</button>
            <button onCLick= {upgradeIncrement}>
              Pay 10 points to change from +{increment} to +{increment + 1}
            </button>
          </div>
        ): (
          <div>
            <h2>You Win</h2>
            <button onClick={reset}>Play Again?</button>
          </div>
        )}
      </main>
    );
}

export default App;
