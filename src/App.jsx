import { useDispatch, useSelector } from 'react-redux'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({
      type: 'INC'
    })
  }

  const decrement = () => {
    dispatch({
      type: 'DEC'
    })
  }

  const addBy = () => {
    dispatch({
      type: 'ADD',
      payload: 10
    })
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

