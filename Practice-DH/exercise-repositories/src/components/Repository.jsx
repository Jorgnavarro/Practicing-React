/**
 * 
 * @param Repository object with a key name 
 * @returns a li element with the name of the repository
 */


export function Repository(props){
    function handleClick(repository){
        props.handleSelect(repository);
    }
    return(
        <li onClick={()=>handleClick(props)}>{props.name}</li>
    )
}