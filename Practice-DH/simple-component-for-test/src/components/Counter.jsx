import { createStore } from 'redux'


/*
Con la aquitectura Flux, se buscca facilitar la gestión del estado. En flux, el estado se separa completamente de los
componentes en React en sus propios almacenes. El estado no se cambia directamente sino con diferentes acciones.
Cuando una acción cambia el estado de un store, las vistas se vuelven a generar, se hace un nuevo render.

Todo el estado de la app se almacena  en un objeto JS en el store. El estado del store se cambia con acciones. Las acciones son objetos que tienen al menos un campo que determina el tipo de acción. 

Por ejemplo, abajo tenemos 3 tipos de acciones diferentes, 'INCREMENT'...,  cada una de esas acciones modifican el estado de acuerdo a su configuración, cada acción constituida en un objeto se configura dentro de un Switch, es la estructura que ofrece un mejor desempeño
*/

//Todo lo explicado anteriormente, el impacto de la acción en un estado, en la aplicación se debe definir dentro de un REDUCER, el reducer es la función que recibe el estado actual y una acción como parámetros y en consecuencia retorna un nuevo estado.
const counterReducer = (state = 0, action) => {

    switch(action.type){
        case 'INCREMENT': 
        return state + 1
        case 'DECREMENT': 
        return state - 1
        case 'ZERO': 
        return 0
        default: 
        return state
    }
}

//Nuestro reducer no llama directamente el código de la aplicación, este solo se proporciona como parámetro a la función createStore, que crea el store, después de esto el store puede usar el Reducer para manejar las acciones
export const store = createStore(counterReducer)

console.log(store.getState())

export const Counter = () => {

    const handlePlus = () => {
        store.dispatch({ type: 'INCREMENT'})
        console.log("hola")
    }

//Después de poder usar el store, se puede implementar el método dispatch, que maneja las acciones que son enviadas o dispatcheds al store
//getState, es otro método disponible que sirve para averiguar el estado actual del store
    // console.log(store.getState())
    // store.dispatch({type: 'INCREMENT'})
    // store.dispatch({type: 'INCREMENT'})
    // store.dispatch({type: 'INCREMENT'})
    // console.log(store.getState())
    // store.dispatch({type: 'ZERO'})
    
    //console.log(store.getState())
    store.subscribe(() => {
        const storeNow = store.getState()
        console.log(storeNow)
    })
    return(
        <div className="mt-3" id="container-btns">
            <p>{store.getState()}</p>
            <div className="row">
                <div className="col-4">
                    <button className="btn btn-outline-success" onClick={() => store.dispatch({ type: 'INCREMENT'})}>Plus</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-outline-danger" onClick={e => store.dispatch({ type: 'DECREMENT'})}>Minus</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-outline-info" onClick={e => store.dispatch({ type: 'ZERO'})}>Zero</button>
                </div>
            </div>
        </div>
    )
}
