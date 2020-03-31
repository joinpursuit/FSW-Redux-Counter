import React from "react";

const Counter = ({ value, onIncrement, onDecrement }) => {

  return (
    <div>
    <p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </p>
  </div>
)
} 

export default Counter;
