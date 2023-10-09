import imageRickMorty from './img/rick-morty.png'
import './App.css';
import {useState, useEffect} from 'react';
import characterService from './services/CharacterService';
import { Home } from './components/Home';
import ListCharacters from './components/ListCharacters'


function App() {
  const [characters, setCharacters] = useState(null);
  const [controlateApi, setControlateApi] = useState(false);

  useEffect(()=>{
      characterService.getAll()
        .then(dataList => {
          if(controlateApi)
            setCharacters(dataList.results)
        }
      )
  },[controlateApi])

  const callApi = () =>{
      setControlateApi(!controlateApi);
  }

  console.log(controlateApi);


  return (
    <div className="App">
      <header className="App-header">
        {characters?undefined:<Home imgHome={imageRickMorty} callApi={callApi} />}
        {characters? (<ListCharacters characters ={characters} setCharacters ={setCharacters} callApi={callApi} />):undefined}
      </header>
    </div>
  );
}

export default App;
