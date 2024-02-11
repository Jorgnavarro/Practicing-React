/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"

//Acá estoy creando el contexto
const CounterContext = createContext()





/*
*Función Reducer

Esta maneja los cambios de estado, es similar a los reducers de Redux, la función obtiene como parámetros el estado actual y la acción que cambia el estado. La función devuelve el nuevo estado actualizado en función del tipo y el posible contenido de la acción
 */

//En este ejemplo las acciones no tiene nada más que un tipo. Si el tipo de acción es INC, aumenta el valor del contador en uno, etc. Como los reducers de Redux, las acciones también pueden contener datos arbitrarios, que generalmente se colocan en el campo payload de la acción.


const counterReducer = ( state, action ) => {
    switch(action.type){
      case "INC":
        return state + 1
      case "DEC":
        return state - 1
      case "ZERO":
        return 0
      default:
        return state
    }
  }

//En esta función lo que hacemos en configurar el Provider, es decir qué valores harán parte del contexto para consumirlos, esta función envolverá al componente más alto en nuestra App, para que así los otros componentes puedan consumirlo si así lo necesitan

export const CounterContextProvider = (props) => {
    /*
  *----------------------------------useReducer
  Este hook proporciona un mecanismo para crear un estado en la aplicación. El parámetro 
  es la función del reducer que maneja los cambios de estado y el valor inicial de estado 
  */

  //La función useReducer retorna un arreglo que contiene un elemento para acceder al valor actual del estado (primer elemento del arreglo) y una función dispatch(segundo elemento del arreglo) para cambiar de estado. "counterDipatch", es el dispatch que carga la info al store del useReducer, por usar otras palabras
  const [counter, counterDispatch] = useReducer(counterReducer, 0);

  return(
    <CounterContext.Provider value={[counter, counterDispatch]}>
        {props.children}
    </CounterContext.Provider>
  )

}

//--------------------------Version 2 auxiliar functions

// eslint-disable-next-line react-refresh/only-export-components
export const useCounterValue = () => {
    const counterAndDispatch = useContext(CounterContext)
    return counterAndDispatch[0]
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCounterDispatch = () => {
    const counterAndDispatch = useContext(CounterContext)
    return counterAndDispatch[1]
}

export default CounterContext