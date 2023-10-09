import { Character } from "./Character";

export default function Characters(props){
    const {characters, setCharacters, callApi, nextPage, prevPage} = props;
    
    const resetCharacters = () =>{
        setCharacters(null);
        callApi();
    }
    const handleClickNextPage =()=>{
        nextPage();
    }

    const handleClickPrevPage = () =>{
        prevPage();
    }
    
    return(<div className="characters">
        <h1>Characters</h1>
        <div className="container-characters">
            {characters.map(character =>{
                    return <Character key={character.id} character={character}/>
            })}
        </div>
        <div className="container-btns">
            <button className="btn-search" onClick={resetCharacters} >Go back home</button>
            <div className="container-btns-change">
                <button className="btn-search" onClick={handleClickPrevPage} >⏪Show prev page</button>
                <button className="btn-search" onClick={handleClickNextPage} >Show the next page⏩</button>
            </div>
        </div>
    </div>
    );
}