import React from "react";
import "./App.css";
import { useState } from "react"




function App(){
  const [currentScore, setScore]=useState(0) 
  const [currentPoint, setPoint]=useState(1)

  const updateScore =()=> {
    setScore(currentScore + currentPoint);
  };

  const updatePoint = () =>{
    if ( currentScore >= 10){
    setPoint(currentPoint + 1)
    setScore(currentScore -10)
    } else {
      alert("You can't afford that!")
  
    }
    }
    
    const resetGame = () => {
      CurrentPoint(1)
      CurrentScore(0)
    }

    if (currentScore >= 100) {
      return (
        <main>
          <h1> Current Score: { currentScore }</h1>
          <h2> you Win </h2>
          <button onClick ={ resetGame }>Play again!</button>
          </main>

      )
      }
    return (
      <main>
        <h1>Current Score: { currentScore }</h1>
        <h2> {updatePoint} </h2>
        <button onClick={updateScore}>+{ currentPoint }</button>
        <button onClick={updatePoint}>
          Pay 10 points to change from +{currentPoint} to +{currentPoint + 1}
        </button>
      </main>
    );
    }
  
export default App
