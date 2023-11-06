import React from 'react'
import { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/globalContext'
import styles from './modules/home.module.css'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    const {dentistList} = useContext(ContextGlobal);
    console.log(dentistList);
  return (
    <main className="container" >
      <h1>Home</h1>
      <div className={`${styles.cardGrid}`}>
        {/* Aqui deberias renderizar las cards */}
        {dentistList.map(dentist =>{
            return <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>
        })}
      </div>
    </main>
  )
}

export default Home