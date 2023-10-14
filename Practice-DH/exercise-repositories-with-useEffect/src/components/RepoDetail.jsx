export function RepoDetail({ repo }) {

    if(repo === null){
        return null;
    }

    return (
        <div>
            <h4>Details of the repository</h4>
            <table className="table table-primary table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Description: </th>
                        <td>{repo.description}</td>
                    </tr>
                    <tr>
                        <th scope="row">Language: </th>
                            <td>{repo.language}</td>
                    </tr>
                    <tr>
                        <th scope="row">Subscribers: </th>
                        <td>{repo.subscribers_count}</td>
                    </tr>
                    <tr>
                        <th scope="row">Created at: </th>
                        <td>{repo.created_at}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}