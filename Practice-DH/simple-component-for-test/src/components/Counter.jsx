import { createStore } from 'redux'


/*
Con la aquitectura Flux, se buscca facilitar la gestión del estado. En flux, el estado se separa completamente de los
componentes en React en sus propios almacenes. El estado no se cambia directamente sino con diferentes acciones.
Cuando una acción cambia el estado de un store, las vistas se vuelven a generar, se hace un nuevo render.
*/
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
export const store = createStore(counterReducer)

console.log(store.getState())

export const Counter = () => {

    const handlePlus = () => {
        store.dispatch({ type: 'INCREMENT'})
        console.log("hola")
    }
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
