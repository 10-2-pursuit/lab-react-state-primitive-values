import React from "react";
import { useState } from "react";
import "./App.css";

function App () {
  const [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1);
  
  
 const addToScore = () => {
    setScore(score + increment); 
 };


const upgradeIncrement =() =>{
    if(score >= 10){
      setIncrement(increment + 1); 
      setScore(score - 10);
    }
    else{ 
      alert("You can't afford that!");
    }
  }; 

const initiateReset = () => {
  setScore(0);
  setIncrement(1);
};


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
            <button onClick={initiateReset}>Play Again?</button>
          </div>
        )}
      </main>
    );
}

export default App;
