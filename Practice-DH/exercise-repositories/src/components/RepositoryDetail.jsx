/**
 * 
 * @param props.detailRepository, es un estado que contiene todos los datos de un repositorio clickeado en la lista, proviene de APP
 * @returns Retorna un div, con todos los detalles del repositorio al cual se le ha hecho click
 */

export function RepositoryDetail (props){
    
    let formatTime = new Date(props.detailRepository.created_at).toLocaleDateString()
    console.log(formatTime);
    //usamos el invalid Date que nos arroja el formatTime, porque indica que no ha llegado ninguna prop con fecha a nuestro componente, creamos el condicional donde indicamos que se debe hacer click para que se desencadene el evento.
    return(
        <div className="container_details">
                {formatTime==="Invalid Date"?<h3>You must click on a repository in the list to see the details...</h3>:
                <>
                <h3>{props.detailRepository.name}</h3>
                <p>{props.detailRepository.description}</p>
                <p>{props.detailRepository.language}</p>
                <p>{props.detailRepository.fork?<span>Repository forked</span>:<span>Repository not forked</span>}</p>
                <a target="_blank" href={props.detailRepository.html_url}>Go to Github</a>
                <p>{formatTime}</p>
                </>
                }
        </div>
    )
}