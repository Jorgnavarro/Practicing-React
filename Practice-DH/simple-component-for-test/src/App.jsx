
import './App.css'
import { ShowMoreInfo } from './components/ShowMoreInfo'
import Counter from './components/Counter'

function App() {
  

  return (
    <>
      <h1 className='mb-4'>Testing in React</h1>
      <ShowMoreInfo  title="Show more information">
        More information, more power...
      </ShowMoreInfo>
      <Counter/>
    </>
  )
}

export default App
