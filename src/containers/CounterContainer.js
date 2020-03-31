import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Counter from "../components/Counter"
import InputField from "../components/InputField";
import Double from '../components/Double'
import { incrementCount, decrementCount, setCount, setDouble } from "../actions/counterActions"

const CounterContainer = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(incrementCount())
  }

  const decrement = () => {
    dispatch(decrementCount())
  }

  const set = (value) =>{
    dispatch(setCount(value))
  }

  const double = (value) =>{
    dispatch(setDouble(value))
  }

  return (
    <React.Fragment>
      <p>{count}</p>
      <Counter value={count} onIncrement={increment} onDecrement={decrement} />
      <InputField value={count} onChange={set}/>
      <Double value={count} onClick={double} setDouble={double}/>
    </React.Fragment>
  )
}

export default CounterContainer