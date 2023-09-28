import { Repository } from "./Repository"

/**
 * 
 * @param data es una lista repositorios que recibe del padre APP 
 * @returns un-ul- que retorna un arreglo de elementos con los valores extraidos de la data proveniente del listado de repositorios, que a su vez se envían a Repository
 */

export function List ({data, handleSelect}){
    return(
        <ul id="list_repo">
            {data.map(repository =>{
                return <Repository key={repository.id} handleSelect={handleSelect} name={repository.name} description={repository.description} fork={repository.fork} html_url={repository.html_url} created_at={ repository.created_at} language={repository.language} />
            })}
        </ul>
    )
}
