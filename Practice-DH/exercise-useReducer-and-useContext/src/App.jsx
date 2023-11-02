import { useContext } from 'react'
import './App.css'
import { TheBag } from './components/TheBag'
import { AppContext } from './context/context'
import TheBagContextProvider from './context/theBagContext';

function App() {
    const {currentTheme, toggleTheme} = useContext(AppContext);
  return (
    <div className={currentTheme} id="container_app">
      <h1>Local Storage</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <TheBagContextProvider>
        <TheBag />
      </TheBagContextProvider>
    </div>
  )
}

export default App
