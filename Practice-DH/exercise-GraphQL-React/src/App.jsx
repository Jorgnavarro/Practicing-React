import './App.css'
import { gql, useQuery } from '@apollo/client'
import Persons from './components/Persons'

/*
*Recordar: Para usar GraphQL en el cliente, se debe instalar npm i @apollo/client graphql
Cuando usamos Postman para hacer las consultas, siempre se deben hacer con solicitudes HTTP POST
Podríamos también implementar Axios para comunicar nuestra app de React con GraphQL, pero no es recomendable. 
Es mejor usar librerías de orden superior capaz de abstraer los detalles innecesarios de la comunicación.

Las opciones que se ofrecen para ello: Relay por Facebook y Apollo Client, este último implementado en este
ejercicio

 */

/**
 * Variables
 */

const ALL_PERSONS = gql `
  query {
    allPersons {
      name
      phone
      id
    }
  }

  query findPersonByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch){
      phone
      city
      street
      id
    }
  }
`

function App() {
  const result = useQuery(ALL_PERSONS)

  if(result.loading){
    return <div className="spinner-grow" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  }

  return (
    <div>
     <Persons persons={result.data.allPersons}/>
    </div>
  )
}

export default App
