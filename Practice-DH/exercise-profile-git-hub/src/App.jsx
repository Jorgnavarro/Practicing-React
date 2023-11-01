import { useContext, useState } from 'react'
import './App.css'
import { UserContext } from './context'

function App() {
  const userContext = useContext(UserContext);

  const { user, changeUser } = userContext;

  const [input, setInput] = useState(user.userName);

  const handleClick = async () => {
    const data = await fetch(`https://api.github.com/users/${input}`);
    const json = await data.json();
    // const { name, avatar_url, html_url, login } = json;
    changeUser(json);
  }

  return (
    <div className='container_app'>
      <h1>GitHub Profile Finder</h1>
      <div>
        <div className='container_input'>
          <input placeholder='Introduce your username'
            defaultValue={user.userName}
            onChange={(e) => setInput(e.target.value)} />
          <button onClick={handleClick}>View profile</button>
        </div>
        <section className='profile'>
          <h3>{user.name}</h3>
          <h4>{user.userName}</h4>
          <img src={user.avatar_url} alt={user.name} />
          <h4>
            <a href={user.html_url} target="_blank" rel='noreferrer'>
            View full profile
          </a>
          </h4>
        </section>
      </div>
    </div>
  )
}

export default App
