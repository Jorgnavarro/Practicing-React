
import { useEffect, useState  } from 'react'
import './App.css'
import { RepoDetail } from './components/RepoDetail';
import { Select } from './components/Select'

function App() {
  const[dataRepos, setDataRepos] = useState([]);
  const [repo, setRepo] = useState(null);

  useEffect(()=>{
      async function getData(){
        try {
          const callApi = await fetch("https://api.github.com/users/gabymorgi/repos");
          const response = await callApi.json();
          setDataRepos(
              response.map(repo=>{
                  return repo.name
              })
          )

        } catch (e) {
          throw new Error("Data not found")
        }
        
      }
      getData()
  }, [])

   async function repoSelected (repository){
      console.log(repository);
      try {
        const callApi = await fetch (`https://api.github.com/repos/gabymorgi/${repository}`)
        const response = await callApi.json()
        setRepo(response);
      } catch (error) {
        setRepo(null);
      }
      
  }
  console.log(repo);


  return (
    
  <div>
    <Select listRepos={dataRepos} onChange={repoSelected}/>
    <RepoDetail repo={repo}/>
  </div>
  )
}

export default App
