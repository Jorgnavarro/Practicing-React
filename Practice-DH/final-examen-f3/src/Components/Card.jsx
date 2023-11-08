import React from "react";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContextGlobal } from "./utils/globalContext";
import styles from './modules/card.module.css'


const Card = ({ name, username, id }) => {
  const {currentTheme} = useContext(ContextGlobal)
  const [styleBtn, setStyleBtn] = useState("");
  const navigate = useNavigate();
  const dentist = {id, name, username}

  useEffect(()=>{
    if(currentTheme === 'dark'){
        setStyleBtn("btn-outline-light");
    }else{
        setStyleBtn("btn-outline-dark")
    }
  },[currentTheme]);


  useEffect(()=>{
    localStorage.setItem('favs', JSON.stringify(listFavs))
  },[listFavs])



  function goToDetail(id){
      navigate(`/dentist/${id}`)
  }

  const addFav = (infoDentist)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const listStorage = JSON.parse(localStorage.getItem("favs"))||[];
    

      if(!listFavs.some(d => d.id === infoDentist.id)){
        setListFavs((oldList) =>[...oldList, infoDentist])
      }
    
  }
  

  return (
    <div className={`card ${styles.cardDefault} ${currentTheme}` } style={{width: "18rem"}} >
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
  <img src="../../images/doctor.jpg" className="card-img-top" alt="dentist image"/>
  <div className="card-body align-items-center">
    <h4 className={`card-title text-center ${styles.linkDetail}`} onClick={()=>goToDetail(id)}>{name}</h4>
    <h5 className="card-text text-center">{username}</h5>
  </div>
    <div className="card-body">
    <button onClick={()=>addFav(dentist)} type="button" className={`btn ${styleBtn}`}>
          Add fav
    </button>
    </div>
  </div>
  );
};

export default Card;
