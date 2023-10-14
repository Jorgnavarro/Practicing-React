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
                        <td>{repo.description===null?"Empy":repo.description}</td>
                    </tr>
                    <tr>
                        <th scope="row">Subscribers: </th>
                        <td>{repo.subscribers_count}</td>
                    </tr>
                    <tr>
                        <th scope="row">Created at: </th>
                        <td>{repo.created_at}</td>
                    </tr>
                    <h5 className="text-center">Lenguages</h5>
                    <>
                        {Object.keys(repo.languages).map((key, index)=>{
                                return <tr>
                                        <th scope="row" key={index}>{key}</th>
                                        <td key={key}>{repo.languages[key]}</td>
                                </tr>
                        })
                        }
                    </>
                </tbody>
            </table>
        </div>

    )
}