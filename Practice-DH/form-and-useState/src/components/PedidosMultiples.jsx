
import {useState} from "react"
import { getId } from "../utils/getId";
import { Menu } from "./Menu";
import { Pedido } from "./Pedido";



export function PedidosMultiples(){
        const [pedidos, setPedidos] = useState([])
        //pedidos será el listado que siempre estaremos actualizando por ende, a ese será que le haremos el .map(), para mostrar lo que el usuario seleccione

        function agregarAlPedido(foodSelect){
            //recibimos del hijo Menu la opción seleccionada y la seteamos
            //para poder agregar elementos en un array, escribimos la siguiente sintaxis, ...pedidos, indicamos que nos guarde las referencias viejas, y que nos agregue un nuevo elemento que en este caso corresponde a "menu"
            /*----------Para arrays----*/
            // const newPedido = [...pedidos, menu]
            // console.log(newPedido);
            //setPedidos(newPedido)
            /*------Para objetos------*/
            const newPedido = {
                id: getId(),
                pedidos: foodSelect,
            }
            setPedidos([...pedidos, newPedido])
            // el setPedidos, de nuevo iniciamos con un array, que nos permita copiar, los pedidos antiguos que ahoran son un objeto con id, y los nuevos pedidos agregados.
        }
        //el componente Pedido lo agregamos dentro del ul, para organizar mejor el código
        //la ventaja de usar splice, es que nos permite conservar el index a diferencia del filter al momento de eliminarPedido. 
        //el problema de usar un index y no un id, es que es muy impreciso y puede generar bugs, así que podemos crear un id, de diferentes formas.

        function eliminarPedido(id){
                //splice se usa cuando se depende de la posición del índice

                // const pedidoNew = [...pedidos]

                //recibe la posición en la que se encuentra el elemento, y la cantidad que deberia eliminar en el segundo parámetro.

                // pedidoNew.splice(index, 1)

                // setPedidos(pedidoNew);
                //Ahora refactorizamos y usamos un filter porque no dependemos de la posición de índice
                const nuevoPedido = pedidos.filter(pedido =>{
                    return pedido.id !== id
                })

                setPedidos(nuevoPedido);

        }
        return(
            <>
            <Menu agregarAlPedido={agregarAlPedido}/>
            <div className='container box-menu col-12'>
                <h2 className='body-text'>
                    This is your order:
                </h2>
                <ul className='list body-text'>
                    {pedidos.map((selected)=>{
                        return <Pedido key={selected.id} id={selected.id} eliminarPedido={()=>eliminarPedido(selected.id)}>{selected.pedidos}</Pedido>
                    })}
                </ul>
            </div>
            </>
        )

}