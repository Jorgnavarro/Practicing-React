import { createSlice } from "@reduxjs/toolkit"
//---------Importamos noteService para usar redux-thunk
import noteService from '../services/notes'

//Al combinar reducers, no necesitamos crear un store por cada reducer, así que se comenta el import createStore, porque ahora se hace de forma global, explicación file main.jsx
//import { createStore } from 'redux'

// const initialState = [
//   {
//     content: 'The app state is in redux store',
//     important: true,
//     id: 1
//   },
//   {
//     content: 'State changes are made with actions',
//     important: false,
//     id: 2
//   }
// ]

// const generateId = () => {
//   return Number((Math.random() * 1000000).toFixed(0))
// }

//El parámetro name de la función createSlice define el prefijo que se utiliza en los valores de tipo de la acción. Por ejemplo, la acción createNote definida más adelante tendrán el valor de tipo notes/createNote. Es una buena práctica dar al parámetro un valor que sea único entre los reducers. De esta forma no habrá colisiones inesperadas entre los valores de tipo de acción de la aplicación. El parámetro "initialState" define el estado inicial del reducer. El parámetro reducers toma el propio reducer como un objeto, cuyas funciones manejan los cambios de estado causados por ciertas acciones. Tenga en cuenta que action.payload en la función contiene el argumento proporcionado al llamar al creador de la acción.

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    //createNote( state, action ){
      //-----Versión sin hacer el post a json-server
      // const content = action.payload
      // state.push({
      //   content, 
      //   important: false,
      //   id: generateId()
      // })
      //--------Cuando hacemos el post a json-server
      //state.push(action.payload)
    //},
    toggleImportanceOf( state, action ){
      const id = action.payload
      const noteToChange = state.find(n => n.id === id)
        const changedNote = {
            ...noteToChange,
            important: !noteToChange.important
        }
        console.log(state)
        //La salida obtenida por consola no se puede interpretar fácil, con ello, podemos ver la librería que usa Redux toolkit, la cual se implementa interamente para guardar el estado de la store
        //Para poder hacer legible debemos convertirlo en una cadena y de nuevo en un objeto Javascript de la siguiente manera:
        console.log(JSON.parse(JSON.stringify(state)))
        
        return state.map(note => 
            note.id !== id ? note : changedNote
        )
    },
    appendNote( state, action ){
      state.push(action.payload)
    },
    setNotes( state, action ){
      return action.payload
    }
  },
})

//La función createSlice retorna un objeto que contiene el reducer así como los creadores de acciones definidos por parámetro "reducers". Se puede acceder al reducer mediante la propiedad noteSlice.reducer, mientras que a los creadores de acciones mediante la propiedad noteSlice.actions, desestructurando podemos aprovechar las importaciones en los otros archivos que hacíamos llamando directamente a los creadores de acciones, en este caso createNote y toggleImportanceOf

export const { appendNote, toggleImportanceOf, setNotes } = noteSlice.actions

//---------------------Usando redux-thunk
//Con Redux thunk, es posible implementar action creators que devuelven una función en lugar de un objeto. La función recibe los métodos dispatch y getState del store de Redux como parámetros. Esto permite, por ejemplo, implementaciones de creadores de acciones asincrónicas, que primero esperan la finalización de una cierta operación asincrónica y luego despachan alguna acción, que cambia el estado del store.

export const initializeNotes = () => {
  return async dispatch => {
     const notes = await noteService.getAll()
     dispatch(setNotes(notes))
  }
}

export const createNote = (content) => {
  return async dispatch => {
    const newObject = {
      content,
      important: false
    }
    const newNote = await noteService.createNewNote(newObject)
    dispatch(appendNote(newNote))
  }
}

export default noteSlice.reducer


//------------------------------Primera versión del Reducer que incluye la función "noteReducer"
//----------------------------- createNote y toggleImportanceOf de forma separada

//const noteReducer = (state = initialState, action) => {
  //---------First version with if-----
  //if(action.type === 'NEW_NOTE'){
    //Al utilizar el push la aplicación parece estar funcionando, pero este reducer está mal porque rompe el supuesto básico de que estas funciones deben ser puras. 
    //Las funciones puras son tales que no causan ningún efecto secundario y siempre deben devolver la misma respuesta cuandos se invocan con los mismos parámetros.
    //------------First version--------------
    //state.push(action.data)
  
    //return state
    //el método state.push(action.data) cambia el estado del objeto. Esto no está permitido. El problema se resuelve fácilmente usando el método concat, que crea un nuevo array, que contiene todos los elementos del array anterior y el nuevo elemento.
    //-----------Second version-------------
    //return state.concat(action.data)
    
  //}
  //return state
  
  //--------Second version more complex with switch-----
  //switch(action.type){
   // case 'NEW_NOTE':
        //---------version with concat
        //return state.concat(action.data)
        //------version with spread operator
   //     return [...state, action.data]
        
//     case 'TOGGLE_IMPORTANCE':
//         const id = action.data.id
//         const noteToChange = state.find(n => n.id === id)
//         const changedNote = {
//             ...noteToChange,
//             important: !noteToChange.important
//         }
//         return state.map(note => 
//             note.id !== id ? note : changedNote
//         )
//     default: 
//         return state
//   }
// }

//export default noteReducer

//IMPORTANTE: un estado reducer debe estar compuesto por objetos inmutables. Si hay un cambio en el estado, el objeto antiguo no se cambia, sino que se reemplaza por un objeto nuevo modificado. Esto es exactamente lo que se hace arriba con el nuevo reducer: el array anterior se reemplaza por el nuevo

//-------------Después de combinar los reducers, no necesitamos crear un store individual para cada reducer, la explicación está en el file main.jsx, por eso se comenta el export const store

//export const store = createStore(noteReducer)

//-------------seteado manual en el store, sin estado inicial

// store.dispatch({
//   type: 'NEW_NOTE', 
//   data: {
//     content: 'The app state is in redux store',
//     important: true,
//     id: 1
//   }
// })

// store.dispatch({
//   type: 'NEW_NOTE', 
//   data: {
//     content: 'State changes are made with actions',
//     important: false,
//     id: 2
//   }
// })

//--------------------------------------


//esta funcion al tomar el content del input envía el objeto al dispatch, así queda nuestro código más prolijo y nuestra app no tiene que mostrar la información que se setea al store del reducer
// export const createNote = (content) => ({
//   type: 'NEW_NOTE',
//   data: {
//     content,
//     important: false,
//     id: generateId()
//   }
// })

// export const toggleImportanceOf = (id) => ({
//   type: 'TOGGLE_IMPORTANCE',
//   data: { id }
// })

