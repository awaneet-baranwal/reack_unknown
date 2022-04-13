import ReactDOM from "react-dom";
// import CounterClass from './CounterClass'
// import PrintMyNames from './PrintMyNames'
// import './index.css';

// function PrintName(){
//     return <h1>This is from printName function</h1>
// }
import React, { useState } from "react";
function CounterFn() {
  const [count, setcount] = useState(0);
  const increamentCounter = () => {
    setcount(count + 1);
  };
  const decreamentCounter = () => {
    setcount(count - 1);
  };
  return (
    <>
      <button onClick={increamentCounter}>+</button>
      <p>{count}</p>
      <button onClick={decreamentCounter}>-</button>
    </>
  );
}
//read bottom to top
ReactDOM.render(
  <>
    <CounterFn />
    {/* <CounterClass/> */}
    {/* <PrintMyNames/> */}
  </>,
  document.getElementById("root")
);
