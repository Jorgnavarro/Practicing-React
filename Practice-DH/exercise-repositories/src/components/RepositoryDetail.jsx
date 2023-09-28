import detailMocked from "./detailMockedData.json"

export function RepositoryDetail (props){
    
    let formatTime = new Date(props.detailRepository.created_at).toLocaleDateString()
    console.log(formatTime);
    return(
        <div className="container_details">
                {formatTime==="Invalid Date"?<h3>You must click on a repository in the list to see the details...</h3>:
                <>
                <h3>{props.detailRepository.name}</h3>
                <p>{props.detailRepository.description}</p>
                <p>{props.detailRepository.language}</p>
                <p>{props.detailRepository.fork?<span>Repo forked</span>:<span>Repo not forked</span>}</p>
                <a target="_blank" href={props.detailRepository.html_url}>Go to Github</a>
                <p>{formatTime}</p>
                </>
                }
        </div>
    )
}