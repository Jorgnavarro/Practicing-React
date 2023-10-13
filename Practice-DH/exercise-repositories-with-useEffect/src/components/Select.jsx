
import { useState, useEffect } from "react"

export function Select ({listRepos}){
        const [repoSelected, setRepoSelected] = useState({})

        const handleSelect = (e) =>{
            console.log(e.target.value);
            useEffect(()=>{
                const repoName = e.target.value;
                async function getRepoDetail (){
                    try {
                        const callApi = fetch(`https://api.github.com/repos/gabymorgi/${repoName}`)      
                        const response = await callApi.json();
                        setRepoSelected(response);
                    } catch (error) {
                        console.log(error);
                    }
                }
            },[])
        }

        return(
            <div>
                <select className="form-select form-select-lg mb-3" aria-label="Large select example" onChange={handleSelect}>
                <option selected> Please select a repository...</option>
                {listRepos.map(repoName =>{
                        return <option key={repoName} value={repoName}>{repoName}</option>
                })}
                </select>
            </div>
            
        )
}