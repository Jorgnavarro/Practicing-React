import { Character } from "./Character";

export default function Characters(props){
    const {characters, setCharacters, callApi} = props;
    
    const resetCharacters = () =>{
        setCharacters(null);
        callApi();
    }
    
    return(<div className="characters">
        <h1>Personajes</h1>
        <div className="container-characters">
            {characters.map(character =>{
                    return <Character key={character.id} character={character}/>
            })}
        </div>
        <button className="btn-search" onClick={resetCharacters} >Volver a la home</button>
    </div>
    );
}