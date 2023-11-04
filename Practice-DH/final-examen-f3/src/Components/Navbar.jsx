import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/globalContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
    const {toggleTheme} = useContext(ContextGlobal);

  return (
    <nav>
      <h3>DH Odonto</h3>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className='container_links'>
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      </div>
      
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar