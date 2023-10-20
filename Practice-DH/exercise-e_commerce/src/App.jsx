import {Outlet, Routes, Route } from 'react-router-dom';
import Beer from './Beer';
import Navbar from './components/Navbar';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <div className='container_app'>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1>
      <div className='navbar_container'>
      <Navbar/>
      </div>
      <Routes>
                <Route path='contact' element={<Contact />} />
                <Route path='/home' element={<Home />}/>
                <Route path='beer/:id' element={<Beer />} />
      </Routes>
    </div>
  )
}

export default App
