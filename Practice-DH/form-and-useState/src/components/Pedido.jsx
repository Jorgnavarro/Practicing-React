import {useState} from "react";

/**
 * 
 * @param props.childern que viene de PedidosMultiples, recibe un string con el elemento seleccionado por el usuario
 * @param eliminarPedido, nos pasa una función que en el padre tiene la configuración para eliminar el elemento renderizado, acá en el hijo solamente la ejecutamos porque el index que es el parámetro que recibe la función se encuentra en el padre.
 * @returns un li que contiene el nombre del  alimento seleccionado, el btn para agrear bebida o no y el btn de eliminar
 */


export function Pedido (props){
    const [isBebida, setIsBebida] = useState(false);
    console.log("id element", props.id);
    return(
        <li>
            <div className="container">
            {props.children}
            <button onClick={()=>{setIsBebida(!isBebida)}}><span>Add drink:</span> {isBebida?"Yes": "No"}</button>
            <button onClick={props.eliminarPedido}>X</button>
            </div>
        </li>
    )
}