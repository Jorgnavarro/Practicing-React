import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, gql } from '@apollo/client'

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
