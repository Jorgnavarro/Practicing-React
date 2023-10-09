export function Character({ character }) {


    return (
        <div className="character-container">
            <div>
                <img src={character.image} alt={character.name} />
            </div>
            <div>
                <h3>{character.name}</h3>
                <h6>
                    {character.status === "Alive" ? (
                        <>
                            <span className="alive" />
                            Alive
                        </>
                    ) : (
                        <>
                            <span className="dead" />
                            Dead
                        </>
                    )}
                </h6>
                <p>
                    <span className="text-grey">Episodios: </span>
                    <span>{character.episode.length}</span>
                </p>
                <p>
                    <span className="text-grey">Especie: </span>
                    <span>{character.species}</span>
                </p>
            </div>

        </div>
    )
}