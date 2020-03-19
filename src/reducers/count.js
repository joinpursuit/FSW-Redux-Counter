import { INCREMENT, DECREMENT, SET } from "../actions/actionTypes";

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case SET:
      return action.value
    default:
      return state;
  }
};
