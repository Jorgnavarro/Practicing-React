
import { useEffect, useState  } from 'react'
import './App.css'
import { Select } from './components/Select'

function App() {
  const[dataRepos, setDataRepos] = useState([]);

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
  
  console.log(dataRepos);

  return (
    
  <div>
  <Select listRepos={dataRepos}/>
  </div>
  )
}

export default App
