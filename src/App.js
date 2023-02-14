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
  
  //increase counter
  const increase = () => {
    setCounter((count) => count + upIncrement);
  };

  //decrease counter
  const decrease = (x) => {
    setCounter((count) => count - x);
  };

  function getCount(){
    return counter;
  }

  const [disable, setDisable] = useState(false);

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
      <div className="ten">
        <h1>Test</h1>
        <div className="ten_container">
          <button className="ten_btn" disabled={disable} onClick={() => {
            if (getCount() >= 10)
            {
              setDisable(true)
              decrease(10)
              okayPlay()
            }}}>
           10
          </button>
        </div>
      </div>
    </div>
  );
}