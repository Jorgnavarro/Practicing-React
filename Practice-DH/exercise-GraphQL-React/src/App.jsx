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

/*
*Consultas y variables con nombres:
Para la siguiente consulta, se implementa la funcionalidad para poder ver los detalles de una persona cuando
se busca por su nombre:
query {
  findPerson(name: "Arto Hellas") {
    phone 
    city 
    street
    id
  }
}

Las recomendaciones que se exigen cuando se hacen consultas programáticamente, se deben hacer de forma dinámica,
en otras palabras los parámetros deben ser dinámicos. Para lo anterior se hace uso de las variables que nos 
ofrece GraphQL, revisemos el siguiente formato:

query findPersonByName($nameToSearch: String!) {
  findPerson(name: $nameToSearch) {
    name
    phone 
    address {
      street
      city
    }
  }
}

El nombre de la consulta es findPersonByName, se le da una cadena $nameToSearch como parámetro. También es posible
realizar lo anterior pasando los parámetros en el playground, en variables de consulta.

*OJO: el hook useQuery es adecuado cuándo al tiempo que se procesa el componente se realiza la consulta
casi que de forma paralela. Pero ahora, queremos realizar una consulta solo cuando un usuario desear ver los
detalles de una person específica, por lo que la consulta se realiza sólo según sea necesario.

Para esta situación se implementa el hook "useLazyQuery", el componente Persons se convierte en:

const FIND_PERSON = gql`
  query findPersonByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      name
      phone 
      id
      address {
        street
        city
      }
    }
  }
`


*/


const ALL_PERSONS = gql `
  query {
    allPersons {
      name
      phone
      id
    }
  }
`

/**
 * 
 */

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
