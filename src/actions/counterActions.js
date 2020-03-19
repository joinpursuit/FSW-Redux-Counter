import { INCREMENT, DECREMENT, SET } from "./actionTypes";

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const setCount = (value) => {
  return { type: SET, value }
}