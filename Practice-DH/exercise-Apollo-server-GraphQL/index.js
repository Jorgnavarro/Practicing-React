//*Instalamos apollo server y graphql con "npm i @apollo-server graphql"
const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
//* instalamos la librería que nos genera los id's "npm i uuidv4"
const { v4: uuidv4 } = require('uuid')
//*Podemos manejar los errores con la validación de GraphQL
const { GraphQLError } = require('graphql')

let persons = [
    {
      name: "Arto Hellas",
      phone: "040-123543",
      street: "Tapiolankatu 5 A",
      city: "Espoo",
      id: "3d594650-3436-11e9-bc57-8b80ba54c431"
    },
    {
      name: "Matti Luukkainen",
      phone: "040-432342",
      street: "Malminkaari 10 A",
      city: "Helsinki",
      id: '3d599470-3436-11e9-bc57-8b80ba54c431'
    },
    {
      name: "Venla Ruuska",
      street: "Nallemäentie 22 C",
      city: "Helsinki",
      id: '3d599471-3436-11e9-bc57-8b80ba54c431'
    },
  ]

/*Lo definido en la constante *typeDefs se conoce como esquema, el cual se encarga de describir los datos
enviados entre el cliente y el servidor
*/
const typeDefs = `

  type Address {
    street: String!
    city: String!
  }

  type Person {
    name: String!
    phone: String
    address: Address!
    id: ID!
  }

  enum YesNo{
    YES
    NO
  }

  type Query {
    personCount: Int!
    allPersons(phone: YesNo): [Person!]!
    findPerson(name: String!): Person
  }

  type Mutation {
    addPerson(
      name: String!
      phone: String
      street: String!
      city: String!
    ): Person
  }
`

/*
En el anterior esquema se describen varios tipos, el tipo Person, que determina 4 campos, tipo que a su vez contiene
otro objeto Adrress, que es otro tipo que también debe ser definido en el esquema. 
Lo que indican los signos de admiración es que el campo debe tener un valor diferente de NULL. El tipo de campo ID
es ID, aunque son cadenas GraphQL garantiza que sean únicos.

El segundo tipo Query, es una consulta, prácticamente todos los esquemas GraphQL describen una consulta, que indica qué tipo de 
consultas se pueden realizar a la API.

En el ejemplo anterior tenemos 3 consultas diferentes. personCount devuelve un número entero, allPersons devuelve una lista de objetos
Person, pero también recibe el parámetro phone: con valores "YES" O "NO", para filtrar la lista retornando el objeto
Person que contenga la propiedad phone o no, dependiendo de lo descrito en el parámetro.
y findPerson recibe un parámetro de cadena y devuelve un objeto Person
*/
//---------------------------------------------------------------------------
/*
 *Objeto dentro de un Objeto
Nuestro esquema ahora se ve así:

type Address {
  street: String!
  city: String! 
}

type Person {
  name: String!
  phone: String
  address: Address!
  id: ID!
}

Por los que una persona ahora tiene el campo con el tipo Address, que contiene la calle y la ciudad. Las consultas que requieren
la dirección cambian a: 

query {
  findPerson(name: "Arto Hellas") {
    phone 
    address {
      city 
      street
    }
  }
}

Y la respuesta de la consulta sería:
{
  "data": {
    "findPerson": {
      "phone": "040-123543",
      "address":  {
        "city": "Espoo",
        "street": "Tapiolankatu 5 A"
      }
    }
  }
}

*Todavía se guarda una persona en el servidor de la misma manera como se hacía antes
Lo anterior indica que los obejtos de personas guardados en el servidor no son exactamente los mismos que los objetos del tipo Person GraphQL
descritos en el esquema.

A diferencia del tipo Person, el tipo Address no tiene un campo ID porque no se guardan en su propia estructura de datos en el servidor.

*Debido a que los objetos guardados en la matriz no tienen un campo address, el resolver predeterminado no es suficiente
Agregamos un resolver para el campo Address de tipo Person:

const resolvers = {
  //...
  Person: {
    address: (root) => {
      return { 
        street: root.street,
        city: root.city
      }
    }
  }
}

De esta forma cada vez que un objeto Person es devuelto, los campos name, phone e id se devuelve utilizando los resolvers predeterminados,
pero el campo address se forma utilizando un resolver autodefinido. El parámetro root de la función de resolución es el objeto-persona, por lo que la calle
y la ciudad de la dirección se pueden tomar de sus campos.
 */

/*
 * Mutations
Si queremos agregar una nueva persona  nuestra agenda. En GraphQL, en todas las operaciones que provocan un cambio se realizan con mutaciones.
Las mutaciones se describen en el esquema como claves de tipo Mutation. Este es el esquema de una mutación para agregar una persona:

type Mutation{
  addPerson(
    name: String!
    phone: String
    street: String!
    city: String!
  ): Person
}

A la mutación se le dan los detalles de la persona como parámetros. El parámetro phone es el único que admite valores NULL. La mutación 
también tiene un valor de retorno. El valor de retorno es de tipo Person, la idea es que los detalles de la persona agregada
se devuelvan si la operación es exitosa y si no, nula. El valor del campo id no se proporciona como parámetro. Es mejor dejar la generación de una
identificación para el servidor.

Para generar los ID en nuestro servidor podemos usar una librería que se conoce como uuidv4 con el comando *npm i uuidv4


Las mutaciones también requieren de un resolver:

const resolvers = {
  // ...
  Mutation: {
    addPerson: (root, args) => {
      const person = { ...args, id: uuid() }
      persons = persons.concat(person)
      return person
    }
  }
}

La mutación agrega el objeto que se le agrega como parámetro *args al arreglo *persons, y devuelve el objeto que agregó al arreglo.

Se puede agregar una nueva persona con la siguiente mutación:

mutation {
  addPerson(
    name: "Pekka Mikkola"
    phone: "045-2374321"
    street: "Vilppulantie 25"
    city: "Helsinki"
  ) {
    name
    phone
    address{
      city
      street
    }
    id
  }
}
----------------No podemos pasar por alto que la persona se guarda en la matriz persons como:
{
  name: "Pekka Mikkola",
  phone: "045-2374321",
  street: "Vilppulantie 25",
  city: "Helsinki",
  id: "2b24e0b0-343c-11e9-8c2a-cb57c2bf804f"
}

Pero la respuesta de la mutación es:
{
  "data": {
    "addPerson": {
      "name": "Pekka Mikkola",
      "phone": "045-2374321",
      "address": {
        "city": "Helsinki",
        "street": "Vilppulantie 25"
      },
      "id": "2b24e0b0-343c-11e9-8c2a-cb57c2bf804f"
    }
  }
}

Lo anterior indica que el resolver del campo Address del tipo Person formatea el objeto de respuesta en la forma correcta.




 */

const resolvers = {
    Query: {
        personCount: () => persons.length,
        allPersons: (root, args) => {
          if(!args.phone){
            return persons
          }
          const byPhone = (person) => 
            args.phone === 'YES' ? person.phone : !person.phone 

          return persons.filter(byPhone)
        },
        findPerson: (root, args) => persons.find(p => p.name === args.name),
    },
    Person: {
      address: (root) => {
        return {
          street: root.street,
          city: root.city
        }
      }
    },
    Mutation: {
      addPerson: (root, args) => {
        if(persons.find(p => p.name === args.name)){
          throw new GraphQLError('Name must be unique', {
            extensions: {
              code: 'BAD_USER_INPUT',
              invalidArgs: args.name
            }
          })
        }

        const person = {...args, id: uuidv4()}
        persons = persons.concat(person)
        return person
      }
    }
}

/*
*Resolvers
la consulta:
query{
  findPerson(name: "Arto Hellas"){
    phone
    city
    street
  }
}
tiene un resolver que se diferencia de los anteriores porque se dan 2 parámetros:

(root, args) => persons.find(p => p.name === args.name)

El segundo parámetro, args, contiene los parámetros de la consulta. El resolutor luego devuelve el arreglo *persons
a la persona cuyo nombre es el mismo que el valor de *args.name. En este caso no se hace uso del primer parámetro.

*No olvidar
Todos los resolvers tienen 4 parámetros. Con Javascript los parámetros no tienen que estar definidos, si no son necesarios.

En el ejemplo anterior cuando buscamos a "Arto Hellas", tenemos que preguntarnos, ¿sabe el servidor devolver exactamente
los campos requeridos por la consulta?

Un servidor GraphQL debe definir los resolvers para campo de cada tipo de esquema. Aunque algunos no hayan sido descritos
por ejemplo en el tipo Person, Apollo define unos resolutores predeterminados. Ejemplo:

Person: {
    name: (root) => root.name,
    phone: (root) => root.phone,
    street: (root) => root.street,
    city: (root) => root.city,
    id: (root) => root.id
}

el resolver pretedeterminado devuelve el valor del campo correspondiente del objeto. Se puede acceder al objeto en sí a través del primer
parámetro del resolver *root
*/

/* *
*new ApolloServer({})
Acá le pasamos a nuestro servidor las configuraciones requeridas para que pueda funcionar, recibe 2 parámetros
El primer parámetro, typeDefs, contiene el esquema de GraphQL.
El segundo parámetro es un objeto que contiene los resolutores o resolvers. Este es el código que define CÓMO se responde a las
consultas GraphQL

Los resolvers deben de corresponder a las consultas descritas en el esquema, en caso de que no sea así, la información
obtenida no será la requerida.

*/
const server = new ApolloServer({
    typeDefs,
    resolvers,
})

/**
Acá levantamos nuestro server, configuramos un puerto y le pasamos las configuraciones previamente seteadas
 */

startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(({ url }) => {
    console.log(`Server ready at ${url}`)
})
