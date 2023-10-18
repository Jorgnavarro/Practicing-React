import { Route, Routes } from 'react-router-dom'
import './App.css'
import { CreateProduct } from './routes/CreateProduct'
import { Detail } from './routes/Detail'
import { EditProduct } from './routes/EditProduct'
import { Home } from './routes/Home'
import { List } from './routes/List'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route index element={<List/>}/>
        <Route path='create' element={<CreateProduct/>}/>
        <Route path=':id/detail' element={<Detail/>}/>
        <Route path= ':id/editProduct' element={<EditProduct/>}/>
      </Route>
        <Route path='*' element={<h1>Route not Found 404</h1>}/>
    </Routes>
  )
}

export default App
