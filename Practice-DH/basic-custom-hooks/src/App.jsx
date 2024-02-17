import './App.css'
import {useCounter} from './hooks/useCounter'

function App() {
  
  const counter = useCounter()
  const left = useCounter()
  const right = useCounter()

  return (
    <div>
      <h1>Examples custom hooks</h1>
      <h2>Counter btns</h2>
      <button>{counter.value}</button>
      <div className='mt-3'>
        <button type='button' className='btn btn-outline-success' onClick={counter.increase}>+</button>
        <button type='button' className='btn btn-outline-warning' onClick={counter.restart}>0</button>
        <button type='button' className='btn btn-outline-danger' onClick={counter.decrease}>-</button>
      </div>
      
      <div className='mt-3'>
        <h2>Counter clicks btns</h2>
        <button>{left.value}</button>
        <button type='button' className='btn btn-outline-success' onClick={left.increase}>Left</button>
        <button type='button' className='btn btn-outline-warning' onClick={right.increase}>Right</button>
        <button>{right.value}</button>
      </div>

    </div>
  )
}

export default App
