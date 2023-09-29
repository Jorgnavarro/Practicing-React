import { Repository } from "./Repository"

/**
 * 
 * @param props.data es una lista repositorios que recibe del padre, la cual nos permite tormar elemento por elemento, para setearlo a Repository, con su key, el objeto completo.
 * @param handleSelect, es una función que está seteada en el padre y que debe llegar hasta el nieto li, para que desencadene el evento click y a su vez reciba la información del repositorio clickeado, que será devuelto al padre, porque la función se ejecuta en li, al recibir el objeto por parámetro. 
 * @returns un-ul- que retorna un arreglo de elementos con los valores extraidos de la data proveniente del listado de repositorios, que a su vez se envían a Repository
 */

export function List (props){
    return(
        <ul id="list_repo">
            {props.data.map(repository =>{
                return <Repository key={repository.id} infoRepo={repository} handleSelect={props.handleSelect}/>
            })}
        </ul>
    )
}
