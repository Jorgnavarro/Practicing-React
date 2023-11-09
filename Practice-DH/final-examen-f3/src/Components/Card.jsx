import React from "react";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContextGlobal } from "./utils/globalContext";
import styles from './modules/card.module.css';
import Button from "./Button";
import Swal from 'sweetalert2';
import image_doctor from '../images/doctor.jpg'


const Card = ({ name, username, id }) => {
  const {currentTheme, removeDentist, listUpdate, setListUpdate} = useContext(ContextGlobal)
  const [styleBtn, setStyleBtn] = useState("");
  const [changeBtn, setChangeBtn] = useState(true);
  const[styleAlert, setStyleAlert] = useState("");
  const navigate = useNavigate();
  const dentist = {id, name, username}

  /*Change style btn with theme*/
  useEffect(()=>{
    if(currentTheme === 'dark'){
        setStyleBtn("btn-outline-light");
        setStyleAlert('black');
    }else{
        setStyleBtn("btn-outline-dark");
        setStyleAlert("#fff");
    }
  },[currentTheme]);

  /*move to detail */
  function goToDetail(id){
      navigate(`/dentist/${id}`)
  }
  
  const addFav = (infoDentist)=>{
    const listStorage = JSON.parse(localStorage.getItem("favs"))||[];
    // Aqui iria la logica para agregar la Card en el localStorage
      setChangeBtn(!changeBtn);
      if(listStorage === null){
          localStorage.setItem("favs", JSON.stringify([infoDentist]));
      }else{
        if(!listStorage.some(d => d.id === infoDentist.id)){
          localStorage.setItem("favs", JSON.stringify([...listStorage, infoDentist]));
        }
      }
      Swal.fire({
        icon: "success",
        title: `<strong>${infoDentist.name}</strong> has been added to favorites.`,
        showConfirmButton: false,
        timer: 2000,
        background: `${styleAlert}`,
      });

  }
/*This useEffect allow to change in the real time about the btn and the list in favs */
  useEffect(()=>{
    setListUpdate( JSON.parse(localStorage.getItem("favs"))||[])
  },[changeBtn])
  

  return (
    <div className={`card ${styles.cardDefault} ${currentTheme}` } style={{width: "18rem"}} >
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
  <img src={image_doctor} className="card-img-top" alt="dentist image"/>
  <div className="card-body align-items-center">
    <h4 className={`card-title text-center ${styles.linkDetail}`} onClick={()=>goToDetail(id)}>{name}</h4>
    <h5 className="card-text text-center">{username}</h5>
  </div>
    <div className="card-body">
      {!listUpdate.some(d => d.id === id)?
      <Button handleClick={()=>addFav(dentist)} className={styleBtn}>
        <i className="bi bi-star"></i>
      </Button>:<Button className={styleBtn} handleClick={()=>removeDentist(dentist)}>
        <i className={`bi bi-star-fill ${styles.iconStyle}`}
        ></i></Button>}
    </div>
  </div>
  );
};

export default Card;
