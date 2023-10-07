
export function Notification({ message }) { 

    if(message === null){
        return null
    }


    return (
        <div className="alert alert-danger" role="alert" id="container-error">
            <strong>  {message} </strong>
        </div>
    )
}