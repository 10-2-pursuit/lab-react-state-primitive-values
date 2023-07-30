import React from "react";
import { useState } from "react";
import "./App.css";

function App () {
  const [count, setCounter] = useState(1);
  const [result, setResult] = useState(0);
  const [status, setStatus] = useState("playing");

  const wonHTML = (
    <>
      <h2>You Win!</h2>
      <button onClick={ () => { playingAgain() } }>Playing again?</button>
    </>
  )

  const playingHTML = (
    <>
      <button onClick = { () => { scoreChanger() } }>+{ count }</button>
      <button onClick = { () => { increamentToX() } }>Pay 10 points to change from +{ count } to +{ count + 1 }</button>
    </>
  )

  return (
      <main>
        <p>React State Lab</p>
        <h1>
          Current Score: { result }
        </h1>
        {( status == "playing" ? playingHTML : wonHTML )};
      </main>
  );

  function scoreChanger(){
    if(result + count >= 100){
      setStatus("won");
      alert("You Win!");
    }
    setResult(result + count);
  }

  function increamentToX(){
    if(result >= 10){
      setResult(result - 10);
      setCounter(count + 1);
    }
    else{
      alert("You can't afford that!");
    }
  }

  function playingAgain(){
    setStatus("playing");
    setResult(0);
  }
}

export default App;
