import { createContext, useState } from "react";


export const AppContext = createContext();



const AppContextProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(
        localStorage.getItem('theme') || 'dark'
    )

    const toggleTheme = () => {
        if (currentTheme === 'light') {
            setCurrentTheme('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            setCurrentTheme('light')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <AppContext.Provider value={{currentTheme, toggleTheme}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;