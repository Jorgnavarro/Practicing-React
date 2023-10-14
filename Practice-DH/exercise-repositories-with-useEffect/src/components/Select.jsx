import { useEffect, useState } from "react";

export function Select({ onChange }) {

    const [dataRepos, setDataRepos] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const callApi = await fetch("https://api.github.com/users/gabymorgi/repos");
                const response = await callApi.json();
                
                setDataRepos(
                    response.map(repo => {
                        return repo.name
                    })
                )

            } catch (e) {
                throw new Error("Data not found")
            }

        }
        getData()
    }, [])

    const handleSelect = (e) => {
        console.log(e.target.value);
        onChange(e.target.value)
    }

    return (
        <div>
            <select className="form-select form-select-lg mb-3" aria-label="Large select example" onChange={handleSelect}>
                <option> Please select a repository...</option>
                {dataRepos.map(repoName => {
                    return <option key={repoName} value={repoName}>{repoName}</option>
                })}
            </select>
        </div>

    )
}