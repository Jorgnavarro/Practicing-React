import './App.css'
import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  console.log(languages);
  const [language, setLanguage] = useState(languages.english);

  // const handleChangeLA = () => { 
  //     setLanguage(()=>{
  //         if(language.id === "EN"){
  //             return languages.spanish
  //         }else if(language.id=== "ES"){
  //           return languages.portuguese
  //         }else{
  //           return languages.english
  //         }
  //     })
  // }
  //Another solution more clean, and escalable
  const handleChangeLA = () =>{
    //mapeamos los idiomas disponibles, esto es escalable porque podemos agregar muchos más
      const languageMap = {
          EN: languages.spanish,
          ES: languages.portuguese,
      }
      //Se obtiene el idioma siguiente basado en el idioma actual. Por ello, las claves del languageMap están invertidas.
      //cuando el Id sea PTBR, se establecerá por default en languages.english, de ahí el signo ||
      const nextLanguage = languageMap[language.id] || languages.english; 
      //Establecemos el nuevo idioma
      setLanguage(nextLanguage);
  }

  const value = {
      language,
      handleChangeLA
  }
  console.log(language);

  return (
    <div className="App">
      <LanguageContext.Provider value={value}>{/* SUGERENCIA: agregue el proveedor LanguageContext */}
        <Navbar />
        <Body />
      </LanguageContext.Provider>
    </div>
  )
}

export default App