import { useContext } from "react"
import CounterContext from "../context/globalContext"


const Display = () => {
//como sabemos que el primer valor de nuestro context es el counter, al desestructurarlo, lo podemos consumir directamente
const [counter] = useContext(CounterContext)
    return (
        <div>
            <h1>Counter with useReducer</h1>
            <h2>{counter}</h2>
        </div>
    )
}


export default Display