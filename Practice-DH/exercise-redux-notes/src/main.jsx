import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import filterReducer from './reducers/filterReducer'
import noteReducer from './reducers/noteReducer'

//----------Versión con reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
     notes: noteReducer,
     filter: filterReducer
  }
})

console.log(store.getState())



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

//---------------------Primeras versiones-------------
//------------Versión con redux y funciones auxiliares
//Este era el store que traiamos de noteReducer cuando sólo había uno. y estabamos usando la configuración básica de redux
//import { store } from './reducers/noteReducer'
// import { createNote } from './reducers/noteReducer'
// import { filterChange } from './reducers/filterReducer'

//Usamos el dispatch para observar el comportamiento del store con dos reducers, cambiamos el estado del filtro y simulamos la creación de una nueva nota, el estado del store se registra en la consola después de cada cambio que se realiza en el store

// store.dispatch(filterChange('IMPORTANT'))
// store.dispatch(createNote('combineReducers forms one reducer from manu simple reducers'))

//-------Creando un reducer combinado
//import { combineReducers, createStore } from 'redux'
//El estado del store definido por el reducer anterior es un objeto, con dos propiedades: notes y filter. El valor de la propiedad notes está definido por el noteReducer, que no tiene que lidiar con otras propiedades del estado. Asímismo, la propiedad filter es administrada por filterReducer
// const reducer = combineReducers({
//     notes: noteReducer,
//     filter: filterReducer
// })

// const store = createStore(reducer)

//acá simulamos el funcionamiento del nuevo reducer que contiene a su vez el reducer de las notas y del filtro
//Para que pueda funcionar debemos hacer uso de suscribir para mirar los cambios en tiempo real del estado del store

// store.subscribe(() => console.log(store.getState()))