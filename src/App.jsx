import { useDispatch, useSelector } from 'react-redux'
import { actions } from './store'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(
      // {type: 'INC'}
      actions.increment()
    )
  }

  const decrement = () => {
    dispatch(
      // { type: 'DEC'}
      actions.decrement()
    )
  }

  const addBy = () => {
    dispatch(
      // { type: 'ADD', payload: 10}
      actions.addBy(10)
    )
  }

  return (
    <>

      <h1> Counter App </h1>
      <h2>{counter}</h2>

      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <button onClick={addBy}>Add by 10</button>
    </>
  )
}

export default App

