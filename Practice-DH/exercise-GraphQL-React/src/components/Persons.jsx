/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { gql, useLazyQuery } from "@apollo/client"
import { useEffect, useState } from "react"
/*
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
const Persons = ({ persons }) => {
    const [getPerson, result] = useLazyQuery(FIND_PERSON)
    const [person, setPerson] = useState(null)

    console.log(persons)

    const showPerson = (name) => {
        getPerson({variables: {nameToSearch: name}})
    }

    useEffect(() => {
        if(result.data){
            setPerson(result.data.findPerson)
        }
    },[result])

    if(person){
        return(
            <div>
                <h2>{person.name}</h2>
                <div>{person.address.street} {person.address.city}</div>
                <div>{person.phone}</div>
                <button onClick={() => setPerson(null)}>close</button>
            </div>
        )
    }

    return (
    <div>
        <h2>Persons</h2>
        {persons.map(p => {
            return <div key={p.name}>
                {p.name} - {p.phone === null ? 'Not found' : p.phone}
                <button onClick={() => showPerson(p.name)}>Show address</button>
            </div>
        })}
    </div>)
}

export default Persons