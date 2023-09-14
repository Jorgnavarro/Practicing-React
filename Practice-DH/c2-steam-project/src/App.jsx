import './App.css';
import { Game } from './Game';
import dataGame  from './fake_Api/data.json';
function App() {
  
  return (
    <>
      <section className='container-section container text-center row'>
        {
          dataGame.map(game =>{
            const {id, name, imgUrl, tags } = game;
            return(
              <Game key={id} imgUrl={imgUrl} tags={tags}>
                {name}
            </Game>
            )

          })

        }
        </section>
    </>
  )
}

export default App
