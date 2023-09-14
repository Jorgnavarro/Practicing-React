

export function Game ({children, imgUrl, tags}){
    return(
        <div className="container col-md-3"id="container-games">
            <div className="card text-bg-secondary" id="container-card">
                <img src={imgUrl} alt="img game" className="card-img-top" />
                <div className='card-body'>
                    <h4 className='card-title'>{children}</h4>
                    <p className="card-text">Categories: {tags.join("-")}</p>
                </div>
            </div>
        </div>
    )
}

