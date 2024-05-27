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

/*
 *Realización de consultas:
Apollo client ofrece algunas alternativas para realizar consultas. Actualmente, el uso de la función hook "useQuery"
es la práctica dominante

Se crea una constante ALL_PERSONS, se inicia con -gql `query{allPersons{//...} queryFindPersonByName(...){//...}}`
La cual se pasará como parámetro a useQuery(ALL_PERSONS), esta consulta para poder ser recuperada se almacena 
en la const result. De la cual, mientras se carga la información se puede mostrar un elemento para la carga
con result.loading

Para obtener los datos específicos de la consulta, se deberá acceder a result.data.allPersons
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
