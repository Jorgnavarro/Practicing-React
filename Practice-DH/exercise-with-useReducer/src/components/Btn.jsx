
// import { useContext } from "react"
// import CounterContext from "../context/globalContext"
import { useCounterDispatch } from "../context/globalContext"


// eslint-disable-next-line react/prop-types
const Btn = ({ type, label, className }) => {

    //-----------version 1
    //const [ counter, dispatch] = useContext(CounterContext)
    //---------version with auxiliar functions
    const dispatch = useCounterDispatch()
    return (
        <button className={className} type='button' onClick={() => dispatch({ type })}>{label}</button>
    )
}

export default Btn