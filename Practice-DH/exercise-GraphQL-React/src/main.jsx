import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, gql } from '@apollo/client'
/*
*Para comenzar con nuestro cliente después de npm i @apollo/client graphql
El comienzo del código crea un nuevo objeto-client, que luego se usa para enviar una consulta al server
*/
const client = new ApolloClient({
   cache: new InMemoryCache(),
   link: new HttpLink({
    uri: 'http://localhost:4000'
   })
})

const query = gql `
  query {
    allPersons {
      name, 
      phone,
      address {
        street,
        city
      }
      id
    }
  }
`
client.query({ query })
  .then((response) => {
    console.log(response.data)
  })


//Acá traemos la información del servidor y la imprimimos por consola.



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)

/**
La aplicación puede comunicarse con un servidor GraphQL usando el objeto "client". se puede hacer que el cliente
sea accesible para todos los componentes de la aplicación empaquetando el componente App con ApolloProvider

 */