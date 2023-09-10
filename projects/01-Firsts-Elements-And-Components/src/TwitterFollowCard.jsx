//siempre debemos importar el useState para poder almacenar estados, antes de iniciarlo

import {useState} from 'react';
export function TwitterFollowCard({children, userName = 'unknow'}){
    //creando un estado
    // const state = useState(false);
    // const isFollowing = state[0]
    // const setIsFollowing= state[1];
    //forma corta de escribirlo usando desestructuración
    const [isFollowing, setIsFollowing] = useState(false);


    //función que maneja el estado, handler, cambiamos a true or false.
    //Todos los elementos adquiren el cambio de estado sin necesidad de escribir mucho código con JS, en un estado almacenamos no solamente el cambio de clases del btn sino también el contenido. Es impresionante lo que podemos hacer con un true y un false en un useState en React
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    console.log(isFollowing);
    //renderizado condicional
    //cambiando el texto del btn
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    //cambiando el color del btn
    const btnClassName = isFollowing ? 'tw-follow-card-btn is-following' : 'tw-follow-card-btn';
    return(
        <article className='tw-follow-card' >
            <header className='tw-follow-card-header' >
                <img 
                className='tw-follow-card-avatar'
                src={`https://unavatar.io/${userName}`} alt="Jorge avatar" />
                <div className='tw-follow-card-info'>
                    <strong>{children}</strong>
                    <span>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={btnClassName} onClick={handleClick}>
                    <span className='tw-follow-card-text'>{text}</span>
                    <span className='tw-follow-card-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}