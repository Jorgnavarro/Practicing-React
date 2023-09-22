//Así es como importamos un archivo module
import styles  from "./List.module.css"

/**
 * 
 * @param {Game} recibe un objeto del cual se obtiene, su nombre, sus tags y la url de la imagen 
 * @returns Una card con un game(elemento)
 */

export function Game ({children, imgUrl, tags}){
    return(
        <div className={`${styles.container_games} container col-md-3`}>
            {/*Con el template methods, en este caso lo que seteemos en el archivo module
            es lo que pondremos entre llaves para evaluarlo, y los estilos en este caso 
            que provienen de bootstrap se escriben como String */}
            <div className={`card text-bg-secondary ${styles.container_card}`}>
                <img src={imgUrl} alt="img game" className="card-img-top" />
                <div className='card-body'>
                    <h5 className='card-title'>{children}</h5>
                    <p className="card-text">Categories: {tags.join("-")}</p>
                </div>
            </div>
        </div>
    )
}

