import { INCREMENT, DECREMENT, SET, DOUBLE } from "./actionTypes";

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const setCount = (value) =>{
  return { type: SET, value}
}

export const setDouble = (value) =>{
  return {type: DOUBLE, value}
}
