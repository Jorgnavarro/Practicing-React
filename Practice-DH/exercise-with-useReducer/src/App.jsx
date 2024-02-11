import { useReducer } from "react"
import Btn from "./components/Btn";

import "./App.css";

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



function App() {
  /*
  *----------------------------------useReducer
  Este hook proporciona un mecanismo para crear un estado en la aplicación. El parámetro 
  es la función del reducer que maneja los cambios de estado y el valor inicial de estado 
  */

  //La función useReducer retorna un arreglo que contiene un elemento para acceder al valor actual del estado (primer elemento del arreglo) y una función dispatch(segundo elemento del arreglo) para cambiar de estado. "counterDipatch", es el dispatch que carga la info al store del useReducer, por usar otras palabras
  const [counter, counterDispatch] = useReducer(counterReducer, 0);
  
  return (
    <div>
      <h1>Counter with useReducer</h1>
      <h2>{counter}</h2>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <Btn className="btn btn-danger" dispatch={counterDispatch} label="-" type="DEC"/>
        <Btn className="btn btn-warning" dispatch={counterDispatch} label="0" type="ZERO"/>
        <Btn className="btn btn-success" dispatch={counterDispatch} label="+" type="INC"/>
      </div>
    </div>
  );
}

export default App;
