

export function Home ({imgHome, callApi}){
    
    function handleClik(){
        callApi()
    }

    return(
        <>
        <h1 className='title'>Rick & Morty</h1>
        <img src={imgHome} alt= "Rick & Morty" className="img-home"/>
        <button onClick={handleClik} className="btn-search">Buscar Personajes</button>
        </>
    );
}