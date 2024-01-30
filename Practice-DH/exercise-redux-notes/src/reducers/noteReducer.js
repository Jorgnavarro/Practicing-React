import { createStore } from 'redux'

export const noteReducer = (state = [], action) => {
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
  switch(action.type){
    case 'NEW_NOTE':
        //---------version with concat
        //return state.concat(action.data)
        //------version with spread operator
        return [...state, action.data]
        
    case 'TOGGLE_IMPORTANCE':
        const id = action.data.id
        const noteToChange = state.find(n => n.id === id)
        const changedNote = {
            ...noteToChange,
            important: !noteToChange.important
        }
        return state.map(note => 
            note.id !== id ? note : changedNote
        )
    default: 
        return state
  }
}

//IMPORTANTE: un estado reducer debe estar compuesto por objetos inmutables. Si hay un cambio en el estado, el objeto antiguo no se cambia, sino que se reemplaza por un objeto nuevo modificado. Esto es exactamente lo que se hace arriba con el nuevo reducer: el array anterior se reemplaza por el nuevo

export const store = createStore(noteReducer)

store.dispatch({
  type: 'NEW_NOTE', 
  data: {
    content: 'The app state is in redux store',
    important: true,
    id: 1
  }
})

store.dispatch({
  type: 'NEW_NOTE', 
  data: {
    content: 'State changes are made with actions',
    important: false,
    id: 2
  }
})