import './App.css'
import axios from "axios"
import { useState, useEffect } from 'react';
import { Note } from './components/Note';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(()=>{
    console.log("effect");
    axios.get('http://localhost:3001/notes')
    .then(response =>{
        console.log('Promise fulfilled');
        setNotes(response.data)
    })

  }, [])

  const addNote = (e) =>{
      e.preventDefault()
      const noteObject = {
          content: newNote,
          date: new Date().toISOString,
          important: Math.random() < 0.5,
          id: notes.length + 1,
      }
      setNotes([
        ...notes, noteObject
      ])
      setNewNote("");
  }

  const handleNoteChange = (e) =>{
      setNewNote(e.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

  return (

    <div>
      <h1>Notes</h1>
      <div>
          <button onClick={()=>{
            setShowAll(!showAll)
          }}>
              Show {showAll? "important": "all"} notes
          </button>
      </div>
      <ul className='list_notes'>
          {notesToShow.map(note =>{
              return <Note key={note.id} content={note.content}/>
          })}
      </ul>
        <form onSubmit={addNote}>
          <div className='cont'>
            <input onChange={handleNoteChange} value={newNote}/>
            <button type="submit">Save</button>
          </div>
        </form>
    </div>
  )
}

export default App
