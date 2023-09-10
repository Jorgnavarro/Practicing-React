import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'jorgluisnavarro',
        name: 'Jorge Luis Navarro',
        isFollowing: true
    },
    {
        userName: 'liatatis',
        name: 'Lía Tatis',
        isFollowing: false
    },
    {
        userName: 'petrogustavo',
        name: 'Gustavo Petro',
        isFollowing: false
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    }
];

//ejemplo renderizando un objeto, con un .map, en el primer return dentro del section, lo que hacemos es usar llaves para escribir todo el código de JS, luego así mismo abrimos paréntesis dentro de lo que devuelve el .map y escribimos el componente con la información
// no se puede pasar por alto la desestructuración, con la const sacamos userName, name and isFollowing, para desglozarlo en el componente.

// Es importante al momento de renderizar una lista de elementos, siempre agregar al componente la key, porque sino React no sabría cual elemento renderizar, y se pueden crear bucles y darse rerenderizados dañando la aplicación, por lo general se usa el id del objeto, de esa forma es como funciona correctamente REACT

export function App(){
    return(
        <section className='App'>
        {
            users.map(user =>{
                const {userName, name, isFollowing} = user;
                return(
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                )
            })
        }
        </section>
    )
    {/*Another way to do de excersice more short*/}
    {/*
         return(
        <section className='App'>
        {
            users.map(({userName, name, isFollowing}) =>{
                return(
                    <TwitterFollowCard userName={userName}
                    initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )




    */}

}