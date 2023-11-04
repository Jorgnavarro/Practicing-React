import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios';

// export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )
  const [dentistList, setDentistList] = useState([]);
  
    useEffect(()=>{
        const request = axios.get("https://jsonplaceholder.typicode.com/users")
        request.then(response => setDentistList(response.data))
    },[])

  const toggleTheme = () =>{
    if(currentTheme === 'light'){
      setCurrentTheme('dark');
      localStorage.setItem('theme', 'dark')
    }else{
      setCurrentTheme('light')
      localStorage.setItem('theme', 'light');
    }
  }

  const values = {
    currentTheme,
    toggleTheme,
    dentistList,
}

  return (
    <ContextGlobal.Provider value={values}>
      {children}
    </ContextGlobal.Provider>
  );
};
