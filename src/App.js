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
  const [upIncrement, setUpIncrement] = useState(1);
  
  const [totalClicks, setTotalClicks] = useState(0);
  
  //increase counter
  function increase() {
    setCounter((count) => count + upIncrement);
    setTotalClicks((count) => count + 1);
  };

  //decrease counter
  const decrease = (x) => {
    setCounter((count) => count - x);
  };

  function getCount(){
    return counter;
  }

  function getTotalCount(){
    return totalClicks;
  }

  function getUpIncrement(){
    return upIncrement;
  }

  const [disableTen, setDisableTen] = useState(false);
  const [disableFifty, setDisableFifty] = useState(false);
  const [disableHundred, setDisableHundred] = useState(false);

  const [trans, setTrans] = useState("red");

  return (
    <div>
      <div className="counter">
        <h1>Counter</h1>
        <span className="counter__output">{counter}</span>
        <div className="btn__container">
          <button className="control__btn" onClick={() => {
           increase()
            if ((getTotalCount()+1)%50 === 0 && getCount() !== 0)
            {
              click100Play()
            }
            else{
              clickPlay()
           }}}>
            Click
          </button>
        </div>
        <div className="App">
          <div>Total Clicks: <span style={{color: '#1CDA16'}}>{getTotalCount()}</span></div>
          <div>Multiplier: <span style={{color: 'red'}}>{getUpIncrement()}</span></div>
          <br></br>
        </div>
      </div>
      <div className="buybtn">
        <div className="buybtn_container">
          <button className="ten_btn" disabled={disableTen} onClick={() => {
            if (getCount() >= 10)
            {
              setDisableTen(true)
              decrease(10)
              okayPlay()
            }}}>
           10
          </button>

          <button className="fifty_btn" disabled={disableFifty} onClick={() => {
            if (getCount() >= 50)
            {
              setDisableFifty(true)
              decrease(50)
              okayPlay()
            }}}>
           50
          </button>

          <button className="hundred_btn" disabled={disableHundred} onClick={() => {
            if (getCount() >= 100)
            {
              setDisableHundred(true)
              decrease(100)
              okayPlay()
              setUpIncrement(2);
              setTrans("transparent")
            }}}>
           <div>100</div>
           <div className="trans" style={{color: trans, fontSize: 50}}>2X</div>
          </button>
        </div>
      </div>
    </div>
  );
}