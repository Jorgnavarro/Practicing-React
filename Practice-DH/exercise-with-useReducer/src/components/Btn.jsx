/* eslint-disable react/prop-types */
import { useContext } from "react"
import CounterContext from "../context/globalContext"


const Btn = ({ type, label, className }) => {

    // eslint-disable-next-line no-unused-vars
    const [ counter, dispatch] = useContext(CounterContext)

    return (
        <button className={className} type='button' onClick={() => dispatch({ type })}>{label}</button>
    )
}

export default Btn