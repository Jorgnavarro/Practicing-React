


export function Select ({listRepos, onChange}){

        const handleSelect = (e) =>{
            console.log(e.target.value);
            onChange(e.target.value)
        }

        return(
            <div>
                <select className="form-select form-select-lg mb-3" aria-label="Large select example" onChange={handleSelect}>
                <option value={null}> Please select a repository...</option>
                {listRepos.map(repoName =>{
                        return <option key={repoName} value={repoName}>{repoName}</option>
                })}
                </select>
            </div>
            
        )
}