import { createContext, useState, useReducer } from "react";

export const TheBagContext = createContext();

//forma cutre de generar un id unico
let id = 0

function getUniqueKey() {
    return id++
}

//opcional: normalizamos los tipos de acciones
const actionTypes = {
    addToStart: 'addToStart',
    addToEnd: 'addToEnd',
    deleteFirstElement: 'deleteFirstElement',
    deleteLastElement: 'deleteLastElement',
    reset: 'reset',
}

//operacion que calcula el valor inicial
//recibe el segundo param del useReducer
function init(initialValue) {
    return localStorage.getItem('bag')
        ? JSON.parse(localStorage.getItem('bag'))
        : initialValue
}

/**
 * @param state el estado antes del setState
 * @param action un objetito con las key type y payload
 */
function bagReducer(state, action) {
    //logica comun para todos los casos
    let newState = [...state]
    //evaluamos el tipo de accion que se esta ejecutando
    switch (action.type) {
        case actionTypes.addToStart: {
            const newElement = {
                id: getUniqueKey(),
                value: action.payload,
            }
            newState.unshift(newElement)
            break
        }
        case actionTypes.addToEnd: {
            const newElement = {
                id: getUniqueKey(),
                value: action.payload,
            }
            newState.push(newElement)
            break
        }
        case actionTypes.deleteFirstElement: {
            newState.shift()
            break
        }
        case actionTypes.deleteLastElement: {
            newState.pop()
            break
        }
        case actionTypes.reset: {
            newState = []
            break
        }
        default: {
            throw new Error(`No se reconoce el type: ${action.type}`)
        }
    }
    //logica comun para todos los casos
    localStorage.setItem('bag', JSON.stringify(newState))
    return newState
}




// eslint-disable-next-line react/prop-types
const TheBagContextProvider = ({children}) =>{
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const [bag, dispatchBag] = useReducer(
        bagReducer, //funcion que se ejecuta cuando se hace un dispatch, retorna el nuevo estado
        [{ id: 100, value: 'manzana' }], //valor inicial
        init //funcion que calcula el valor inicial
    )

    

    const addAppleFirst = () => {
        dispatchBag({ type: actionTypes.addToStart, payload: 'Apple' })
    }

    const addBananaEnd = () => {
        dispatchBag({ type: actionTypes.addToEnd, payload: 'Banana' })
    }

    const addToEndElement = () => {
        //somos agnosticos a como se maneja el estado
        //solo sabemos que queremos agregar un elemento al final
        dispatchBag({ type: actionTypes.addToEnd, payload: value })
        setValue('')
    }

    const addToStartElement = () => {
        dispatchBag({ type: actionTypes.addToStart, payload: value })
        setValue('')
    }

    const deleteFirstElement = () => {
        dispatchBag({ type: actionTypes.deleteFirstElement })
    }

    const deleteLastElement = () => {
        dispatchBag({ type: actionTypes.deleteLastElement })
    }

    const resetBag = () => {
        dispatchBag({ type: actionTypes.reset })
    }

    const values = {
        value,
        handleChange,
        bag,
        addAppleFirst,
        addBananaEnd,
        addToEndElement,
        addToStartElement,
        deleteFirstElement,
        deleteLastElement,
        resetBag,
    }

    return(
        <TheBagContext.Provider value={values}>
            {children}
        </TheBagContext.Provider>
    )
}

export default TheBagContextProvider;