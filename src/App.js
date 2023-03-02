import "./App.css";
import { React, useState } from "react";
import Popup from './Popup';

import clickSound from "./sounds/click.mp3"
import okaySound from "./sounds/OKAY.mp3"
import click100Sound from "./sounds/click100.mp3"

import spySound1 from "./sounds/Spy_no01.wav"
import spySound2 from "./sounds/Spy_no02.wav"
import spySound3 from "./sounds/Spy_no03.wav"

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
  const [disableFivehundred, setDisableFivehundred] = useState(false);

  const [autoClicker, setAutoClicker] = useState(1);

  const [transMulti, setTransMulti] = useState("red");
  const [transAuto, setTransAuto] = useState("blue");

  function autoClickerIncrease(){
    setCounter((count) => count + autoClicker);
  }

  function getAutoClickNum(){
    return autoClicker-1;
  }
  
  const [quote, setQuote] = useState('');

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random()*data.length);
        setQuote(data[randomNum]);
      })
  }

  function popUpBoth(){
    setButtonPopup(true)
    getQuote()
  }

  const [buttonPopup, setButtonPopup] = useState(false);

  function playRandSpySound(){
    var randNum = Math.random()*3;
    if(randNum === 0){
      new Audio(spySound1).play()
    }
    else if (randNum === 1){
      new Audio(spySound2).play()
    }
    else{
      new Audio(spySound3).play()
    }
  }

  return (
    <div>
      <div className="counter">
        <h1>Tristán Clicker</h1>
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
          <div>Auto Clicker: <span style={{color: 'blue'}}>{getAutoClickNum()} </span></div>
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
              popUpBoth()
            }
            else{
              playRandSpySound()
            }}}>
           10
          </button>

          <button className="fifty_btn" disabled={disableFifty} onClick={() => {
            if (getCount() >= 50)
            {
              setDisableFifty(true)
              decrease(50)
              okayPlay()
              popUpBoth();
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
              setTransMulti("transparent")
              popUpBoth();
            }}}>
           <div>100</div>
           <div className="transMulti" style={{color: transMulti, fontSize: 50}}>2X</div>
          </button>

          <button className="fivehundred_btn" disabled={disableFivehundred} onClick={() => {
            if (getCount() >= 500)
            {
              setDisableFivehundred(true)
              decrease(500)
              okayPlay()
              setTransAuto("transparent")
              setInterval(() => {autoClickerIncrease()}, 1000)
              popUpBoth();
            }}}>
           <div>500</div>
           <div className="transAuto" style={{color: transAuto, fontSize: 50}}>Auto</div>
          </button>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>"{quote.text}"</h3>
        <h4>-Tristán Howard-Ron</h4>
      </Popup>
    </div>
  );
}