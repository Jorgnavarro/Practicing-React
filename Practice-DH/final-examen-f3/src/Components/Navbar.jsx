import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/globalContext'
import styles from './modules/navbar.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { toggleTheme } = useContext(ContextGlobal);
  const statusTheme = localStorage.getItem('theme')
  console.log(statusTheme);
  function handleInput (){
      if(statusTheme === 'light'){
        return false;
      }else{
        return true;
      }
  }
  return (
    <nav className={styles.nav_style}>
      <h3>DH Odonto</h3>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className={styles.container_links}>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
      </div>
      <div className={styles.darkMode}>
        <input type="checkbox" id="switch" onClick={toggleTheme}/> <label htmlFor="switch" checked={handleInput}></label>
    </div>
    </nav>
  )
}

export default Navbar