

export function Comment ({comment}){


        return(
            <li className="list-group-item list-group-item-dark">
                <div>
                        <h4>{comment.name}</h4>
                        <p>{comment.body}</p>
                        <p>Author: {comment.email}</p>
                </div>
            </li>
        )
}