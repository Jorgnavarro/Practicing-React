import './App.css';
import { Game } from './Game';
import dataGame  from './fake_Api/data.json';
import { List } from './List';
function App() {
  
  return (
    <>
      <List>
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
        </List>
    </>
  )
}

export default App
