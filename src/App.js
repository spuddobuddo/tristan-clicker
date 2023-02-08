import sound from "./sounds/click.mp3"
import "./App.css";
import { React, useState } from "react";

export default function App() {

  function play(){
    new Audio(sound).play()
  }

  const [counter, setCounter] = useState(0);
  const upIncrement = 1;
  const downIncrement = 1;
  
  //increase counter
  const increase = () => {
    setCounter((count) => count + upIncrement);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - downIncrement);
  };

  return (
    <div className="counter">
      <h1>Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={() => {play(); increase()}}>
          Click
        </button>
      </div>
    </div>
  );
}