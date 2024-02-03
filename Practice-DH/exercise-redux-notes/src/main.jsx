import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
//Este era el store que traiamos de noteReducer cuando sólo había uno.
//import { store } from './reducers/noteReducer'
import { combineReducers, createStore } from 'redux'
import filterReducer from './reducers/filterReducer'
import noteReducer from './reducers/noteReducer'
import { createNote } from './reducers/noteReducer'
import { filterChange } from './reducers/filterReducer'

//-------Creando un reducer combinado
//El estado del store definido por el reducer anterior es un objeto, con dos propiedades: notes y filter. El valor de la propiedad notes está definido por el noteReducer, que no tiene que lidiar con otras propiedades del estado. Asímismo, la propiedad filter es administrada por filterReducer
const reducer = combineReducers({
    notes: noteReducer,
    filter: filterReducer
})

const store = createStore(reducer)
console.log(store.getState())
//acá simulamos el funcionamiento del nuevo reducer que contiene a su vez el reducer de las notas y del filtro
//Para que pueda funcionar debemos hacer uso de suscribir para mirar los cambios en tiempo real del estado del store

store.subscribe(() => console.log(store.getState()))

//Usamos el dispatch para observar el comportamiento del store con dos reducers, cambiamos el estado del filtro y simulamos la creación de una nueva nota, el estado del store se registra en la consola después de cada cambio que se realiza en el store

store.dispatch(filterChange('IMPORTANT'))
store.dispatch(createNote('combineReducers forms one reducer from manu simple reducers'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
