import React from "react";

const Counter = ({ value, onIncrement, onDecrement }) => {

  return (
    <div>
    <p>value: {value}</p>
    <p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </p>
  </div>
)
} 

export default Counter;
