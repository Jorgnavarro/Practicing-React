import React, { useContext } from 'react'
import "../App.css"
import LanguageContext from '../context'

const Navbar = () => {
    /* SUGERENCIA: Descomente este bloque de código, cuando "App.jsx" tenga un proveedor
    */
    const {language, handleChangeLA} = useContext(LanguageContext);
    const {text} = language
    return (
        <div className="navbar">
            {/* CONSEJO: Deje esta información dinámica, use los valores capturados vía contexto (ver 'texto', en la línea 8)*/}
            <p>{text.home}</p> 
            <p>{text.current}: {language.id}</p>
            <button onClick={handleChangeLA}>{text.button}</button>
        </div>
    )
}

export default Navbar