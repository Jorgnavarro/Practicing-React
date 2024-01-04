import { createContext, useState } from "react";
import loginService from '../services/login'
import noteService from '../services/note'

export const ContextGlobal = createContext();

/* eslint-disable react/prop-types */
export const ContextProvider = ({ children }) => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null)

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
                username, password
            })
            window.localStorage.setItem(
                'loggedUserNotes', JSON.stringify(user)
            )
            noteService.setToken(user.token)
            setUser(user)
            setUsername("")
            setPassword("")
        } catch (exception) {
            setErrorMessage('Wrong credentials')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    }



    const values = {
        errorMessage,
        setErrorMessage,
        username,
        password,
        user,
        setUser,
        handleLogin
    }



    return (
        <ContextGlobal.Provider value={values}>
            {children}
        </ContextGlobal.Provider>
    )

}