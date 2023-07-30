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
}
    return (
      <main>
        <p></p>
      </main>
    );
}

export default App;
