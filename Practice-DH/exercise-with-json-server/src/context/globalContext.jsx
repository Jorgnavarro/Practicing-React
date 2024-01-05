import { createContext, useState } from "react";


export const ContextGlobal = createContext();

/* eslint-disable react/prop-types */
export const ContextProvider = ({ children }) => {
    //Creamos el contexto para compartir entre diferentes componentes
    //los estados
    //Este estado almacena cualquier mensaje de error de la app
    const [errorMessage, setErrorMessage] = useState(null);
    //Este estado toma el username y password para iniciar sesión
    //Por tanto consume el service, en caso de esta correcto
    //hace que se retorne un token
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //Almacena el token del usuario y otros datos en el localStorage
    //para sostener la sesión del usuario al momento de hacer refresh
    //PD: no es una buena práctica
    const [user, setUser] = useState(null)




    const values = {
        errorMessage,
        setErrorMessage,
        username,
        setUsername,
        password,
        setPassword,
        user,
        setUser,
    }



    return (
        <ContextGlobal.Provider value={values}>
            {children}
        </ContextGlobal.Provider>
    )

}