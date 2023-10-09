import imageRickMorty from './img/rick-morty.png'
import './App.css';
import {useState, useEffect} from 'react';
import characterService from './services/CharacterService';
import { Home } from './components/Home';
import ListCharacters from './components/ListCharacters'


function App() {
  const [characters, setCharacters] = useState(null);
  const [controlateApi, setControlateApi] = useState(false);
  const [pages, setPages] = useState(1);

  useEffect(()=>{
      characterService.getAll(pages)
        .then(dataList => {
          if(controlateApi)
            setCharacters(dataList.results)
        }
      )
  },[controlateApi, pages])

  const callApi = () =>{
      setControlateApi(!controlateApi);
  }
  function nextPage(){
      setPages((pages)=>{
          if(pages<42){
              return pages+1;
          }else{
              return 1;
          }
      })
  }
  function prevPage (){
      setPages((pages)=>{
        if(pages > 1){
            return pages - 1
        }else{
            return 42;
        }
      }
      )
  }
  console.log(pages);
  console.log(controlateApi);


  return (
    <div className="App">
      <header className="App-header">
        {characters?undefined:<Home imgHome={imageRickMorty} callApi={callApi} />}
        {characters? (<ListCharacters characters ={characters} setCharacters ={setCharacters} callApi={callApi} nextPage={nextPage} prevPage={prevPage} />):undefined}
      </header>
    </div>
  );
}

export default App;
