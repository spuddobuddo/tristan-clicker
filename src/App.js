import clickSound from "./sounds/click.mp3"
import okaySound from "./sounds/OKAY.mp3"
import click100Sound from "./sounds/click100.mp3"

import image1 from "./photos/image1.jpeg"

import "./App.css";
import { React, useState } from "react";
export default function App() {

  function clickPlay(){
    new Audio(clickSound).play()
  }

  function click100Play(){
    new Audio(click100Sound).play()
  }

  function okayPlay(){
    new Audio(okaySound).play()
  }

  const [counter, setCounter] = useState(0);
  var upIncrement = 1;
  var downIncrement = 1;
  
  //increase counter
  const increase = () => {
    setCounter((count) => count + upIncrement);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - downIncrement);
  };

  function getCount(){
    return counter;
  }

  return (
    <div>
      <div className="counter">
        <h1>Counter</h1>
        <span className="counter__output">{counter}</span>
        <div className="btn__container">
          <button className="control__btn" onClick={() => {
           increase()
            if ((getCount()+1)%50 === 0 && getCount() !== 0)
            {
              click100Play()
            }
            else{
              clickPlay()
           }}}>
            Click
          </button>
        </div>
      </div>
      <div className="test">
        <h1>Test</h1>
        <div className="test_container">
          <button className="test_btn">
           Test
          </button>
        </div>
      </div>
    </div>
  );
}