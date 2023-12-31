import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/globalContext";
import styles from './modules/home.module.css';
import styles2 from './modules/favs.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {listUpdate} = useContext(ContextGlobal)
  const listStorage = JSON.parse(localStorage.getItem("favs"))||[];

  return (
    <div className={styles2.container_favs}>
      <h1 className="mb-5">Dentists Favs</h1>
      <div className={`${styles.cardGrid}`}>
        {/* este componente debe consumir los destacados del localStorage */}
        {listStorage?.map(dentist =>{
            return <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>
        })}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
