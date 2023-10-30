import React, { useContext } from 'react'
import LanguageContext from '../context'

const Body = () => {
    
    /* SUGERENCIA: Utilice useContext() */
    const {language} = useContext(LanguageContext);
    const {text} = language;
    console.log(text);
    
    return (
        <div>
            {/*CONSEJO: Utilice los valores capturados a través del contexto*/}
            <h1>{text.title}</h1>
            <p>{text.description}</p>
        </div>
    )
}

export default Body