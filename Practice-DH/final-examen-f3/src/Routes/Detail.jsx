import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './modules/detail.module.css';
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/globalContext';
import { useCallback } from 'react';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState();
  const { id } = useParams();
  const {currentTheme} = useContext(ContextGlobal);

  useEffect(() => {
    const request = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    request.then(response => setDentist(response.data));
  }, [])

  

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className={`${styles.container_detail} ${currentTheme}`}>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className={styles.img_detail}>
        <img src='../../public/images/doctor.jpg' alt='image dentist' />
      </div>
      <div className={styles.container_table}>
        <table className="table mt-2">
          <thead>
            <tr className='table-dark'>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">website</th>
            </tr>
          </thead>
          <tbody>
            <tr className='table-dark'>
              <th scope="row">{dentist?.name}</th>
              <td>{dentist?.email}</td>
              <td>{dentist?.phone}</td>
              <td>{dentist?.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Detail