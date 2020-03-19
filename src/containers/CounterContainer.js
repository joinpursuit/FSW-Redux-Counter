import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Counter from "../components/Counter"
import InputField from "../components/InputField"
import { incrementCount, decrementCount, setCount } from "../actions/counterActions"

const CounterContainer = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(incrementCount())
  }

  const decrement = () => {
    dispatch(decrementCount())
  }
  
  const set = (value) => {
    dispatch(setCount(value))
  }

  return (
    <React.Fragment>
      <Counter value={count} onIncrement={increment} onDecrement={decrement} />
      <InputField value={count} onChange={set}/>
    </React.Fragment>
  )
}

// The component is connected to the redux store
export default CounterContainer
// export default connect(state => state)(CounterContainer);
