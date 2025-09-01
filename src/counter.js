import React from "react";
import './counter.css'
function Counter(props) {
  return (
    <div className="counter-body">
        <div className="container">
      <h1>Counter</h1>
      <h2>{props.counter}</h2>
      <div>
        {props.counter<=0? <button className="button button-1"  onClick={props.handleDecrement} type="button" disabled>
          -
        </button>
        :<button className="button button-1"  onClick={props.handleDecrement} type="button">
          -
        </button>}
        <button className="button button-2"  onClick={props.handleReset}>Reset</button>
        <button className="button button-3" onClick={props.handleIncrement}>+</button>
      </div>
      </div>
    </div>
  );
}

export default Counter;
