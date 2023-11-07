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
    if(currentTheme === "light"){
      setCurrentTheme('dark');
      localStorage.setItem('theme', 'dark')
    }else{
      setCurrentTheme('light')
      localStorage.setItem('theme', 'light');
    }
  }

  const handleCheckbox = () =>{
    let flag = "";
    if(currentTheme === "dark"){
      document.documentElement.style.setProperty('--background-color', '#12121296');
      document.documentElement.style.setProperty('--text-color', 'white');
      return flag = true;
    }else{
      document.documentElement.style.setProperty('--background-color', 'white');
      document.documentElement.style.setProperty('--text-color', 'black');
      return flag = false;
    }
  }

  const values = {
    currentTheme,
    toggleTheme,
    handleCheckbox,
    dentistList,
}

  return (
    <ContextGlobal.Provider value={values}>
      {children}
    </ContextGlobal.Provider>
  );
};
