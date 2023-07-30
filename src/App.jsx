import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  
  const [amount, changeNum] = useState(0)
  const [increment, changeInc] = useState(1)

  function checkVal() {
    if(amount >= 10){
      changeNum(amount-10)
      changeInc(increment+1)
    } else {
      alert("You cant afford that!")
    }
  }

  function resetVal() {
    changeNum(0)
    changeInc(1)
  }
  
  const Game = () => {

    if(amount <= 100) {
      return (        
        <>
          <button onClick={() => {changeNum(amount+increment)}}>+{increment}</button><br />
          <button onClick={() => {checkVal()}}>Pay 10 points to change from +{increment} to +{increment+1}</button>
        </>
        )
    } 
  }

  const ResetWin = () => {

    if(amount >= 100) {
      return (        
        <div>
          <h2>You Win!</h2>
          <button onClick={() => {resetVal()}}>Play Again?</button>
        </div>
        )
    } 
  }

    return (
      <main>
        <h1>Current Score: {amount}</h1>
        <Game/>
        <ResetWin />
      </main>
    );
}

export default App;
