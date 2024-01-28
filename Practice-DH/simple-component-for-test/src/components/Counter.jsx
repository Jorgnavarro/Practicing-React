import { createStore } from 'redux'


const Counter = () => {

    const counterReducer = (state = 0, action) => {

        switch(action.type){
            case 'INCREMENT' : 
            return state + 1
            case 'DECREMENT' : 
            return state - 1
            case 'ZERO': 
            return 0
            default: 
            return state
        }
    }
    const store = createStore(counterReducer)
    console.log(store.getState())
    store.dispatch({type: 'INCREMENT'})
    store.dispatch({type: 'INCREMENT'})
    store.dispatch({type: 'INCREMENT'})
    console.log(store.getState())
    store.dispatch({type: 'ZERO'})
    store.dispatch({type: 'DECREMENT'})
    console.log(store.getState())
    return(
        <div className="mt-3" id="container-btns">
            <p>0</p>
            <div className="row">
                <div className="col-4">
                    <button className="btn btn-outline-success">Plus</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-outline-danger">Minus</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-outline-info">Zero</button>
                </div>
            </div>
        </div>
    )
}

export default Counter