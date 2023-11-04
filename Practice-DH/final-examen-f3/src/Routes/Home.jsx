import React from 'react'
import { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/globalContext'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    const {dentistList} = useContext(ContextGlobal);
    console.log(dentistList);
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentistList.map(dentist =>{
            return <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>
        })}
      </div>
      <button type="button" className="btn btn-outline-primary">Primary</button>
    </main>
  )
}

export default Home