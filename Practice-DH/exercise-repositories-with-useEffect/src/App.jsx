
import { useState } from 'react'
import './App.css'
import { RepoDetail } from './components/RepoDetail';
import { Select } from './components/Select'

function App() {

  const [repo, setRepo] = useState(null);

  async function repoSelected(repository) {
    if(repository.includes("Please")){
        setRepo(null);
    }else{
      try {
        const callApi = await fetch(`https://api.github.com/repos/gabymorgi/${repository}`)

        const response = await callApi.json();
      
        const reponseLanguages = await fetch(response.languages_url);

        const languagesResponse = await reponseLanguages.json();
        setRepo(
          {
            ...response,
            languages: languagesResponse,
          }
          );
      } catch (error) {
        console.log(error.message);
      }
    }
    

  }
  console.log(repo);


  return (

    <div>
      <Select onChange={repoSelected} />
      <RepoDetail repo={repo} />
    </div>
  )
}

export default App
