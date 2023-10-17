import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Detail } from './routes/Detail'
import { Home } from './routes/Home'
import { List } from './routes/List'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route index element={<List/>}/>
        <Route path='create' element={<div>Create</div>}/>
        <Route path=':id/detail' element={<Detail/>}/>
      </Route>
        <Route path='*' element={<h1>Route not Found 404</h1>}/>
    </Routes>
  )
}

export default App
