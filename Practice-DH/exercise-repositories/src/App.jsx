import { useState } from 'react'
import './App.css';
import { List } from './components/List';
import { RepositoryDetail } from './components/RepositoryDetail';
import data from "./data.json";

function App() {
  const [detailRepository, setDetailRepository] = useState({});
  
  function handleSelect(repository){
    setDetailRepository(repository)
  }

  console.log(detailRepository);

  return (
    <>
      <div className='container-repositories'> 
        <h2>Repository Details📥</h2>
        <RepositoryDetail detailRepository={detailRepository} />
          <h2>Repositories List📤</h2>
        <List data={data} handleSelect={handleSelect}/>
      </div>
    </>
  )
}

export default App
