import { useMemo } from "react";
import { useState, memo } from "react";

/*En este caso, al momento de cambiar el estado de ShowValue, se vuelve a renderizar todo el componente, pero usando useMemo con las props de este elemento, deja de renderizarse a nivel global, porque el useMemo lo obliga a permancer en este contexto. */

function ShowValue({params}){
        console.log(`showValue render, ${params.value}`);
        return <div>{params.value}</div>;
}

const MemoShowValue = memo(ShowValue);

export function SimpleElements(){
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState('ON');
    const params = useMemo(()=>({value}),[value])
    console.log(`SimpleElements re-render, ${counter}`);

    const changeCounter = () =>{
        setCounter(counter + 1);
    }

    const changeValue = () =>{
        setValue(value === 'ON' ? 'OFF' : 'ON');
    }

    return(
            <div>
            <h1>Example useMemo</h1>
                <MemoShowValue params={params}/>
                <div>
                    <button onClick={changeCounter}>Re-render</button>
                </div>
                <div>
                <button onClick={changeValue}>Change value</button>
                </div>
            </div>

    )

}