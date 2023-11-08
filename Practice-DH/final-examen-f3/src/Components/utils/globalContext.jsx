import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';


export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )
  const [dentistList, setDentistList] = useState([]);
  const [listUpdate, setListUpdate] = useState([]);
  const [alertBg, setAlertBg] = useState("");
  const [alertTxt, setAlertTxt] = useState("");
  const [alertBtnC, setAlertBtnC] = useState("");
  
  
  
    useEffect(()=>{
        const request = axios.get("https://jsonplaceholder.typicode.com/users")
        request.then(response => setDentistList(response.data))
    },[])

  const toggleTheme = () =>{
    if(currentTheme === "light"){
      setCurrentTheme('dark');
      localStorage.setItem('theme', 'dark');
    }else{
      setCurrentTheme('light')
      localStorage.setItem('theme', 'light');
    }
  }
  useEffect(()=>{
    if(currentTheme === "dark"){
      setAlertBg("black");
      setAlertTxt("white");
      setAlertBtnC('black')
    }else{
      setAlertBg("#fff");
      setAlertTxt("black");
      setAlertBtnC("");
    }
  },[currentTheme])

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

  const removeDentist = (infoDentist) =>{
    Swal.fire({
      title: `Do you want to remove ${infoDentist.name} from favorites?`,
      icon: "warning",
      color:`${alertTxt}`,
      showCancelButton: true,
      confirmButtonColor: `${alertBtnC}`,
      cancelButtonColor: "grey",
      background: `${alertBg}`,
      confirmButtonText: "Yes, remove!"
    }).then((result) => {
      if (result.isConfirmed) {
        const listStorage = JSON.parse(localStorage.getItem("favs"));
        const newList = listStorage.filter(dentist=>{
            return dentist.id !== infoDentist.id
        })
        setListUpdate(newList);
        localStorage.setItem("favs", JSON.stringify(newList));
        Swal.fire({
          color: `${alertTxt}`,
          background:`${alertBg}`,
          text: "Your dentist has been removed from favorites",
          icon: "success",
          confirmButtonColor: "grey",
        });
      }
    });
    
  }

  const values = {
    currentTheme,
    toggleTheme,
    handleCheckbox,
    dentistList,
    removeDentist,
    setListUpdate,
    listUpdate,
}

  return (
    <ContextGlobal.Provider value={values}>
      {children}
    </ContextGlobal.Provider>
  );
};
