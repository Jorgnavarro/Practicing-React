import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { store } from './reducers/noteReducer'

function App() {



  return (
    <div>
      <ul>
        {
          store.getState().map(note => {
            return <li key={note.id}>
                      {note.content} <strong> {note.important? <button>important</button>: ''}</strong>
                  </li>
          })
        }
      </ul>
    </div>
  )
}

export default App
