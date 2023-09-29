/**
 * 
 * @param props.name se obtiene el nombre de todos los repositorios para renderizarlos en una lista, solo nombres.
 * @param handleClick, ejecuta la función "()=>handleClick(props)" , la cual recibe por parámetro el objeto completo que fue clickeado y se envía al padre para que lo seteé al estado, y de esta forma poder renderizarlo en el componente RepositoryDetail. 
 * @returns a li element with the name of the repository
 */


export function Repository(props){
    function handleClick(repository){
        props.handleSelect(repository);
    }
    return(
        <li onClick={()=>handleClick(props.infoRepo)}>{props.infoRepo.name}</li>
    )
}