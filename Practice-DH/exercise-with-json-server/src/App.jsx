import './App.css'
import axios from "axios"
import { useState, useEffect } from 'react';
import { Note } from './components/Note';
import noteService from './services/note.js';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("effect");
    noteService.getAll()
    .then(initialNotes =>{
        setNotes(initialNotes);
    })

  }, [])

  const addNote = (e) => {
    e.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    }
    noteService.create(noteObject)
      .then(noteCreated => {
        setNotes([...notes, noteCreated]);
        setNewNote("");
      })


  }

  const toggleImportanceOf = (id) =>{
      const note = notes.find(n => n.id === id);
      const changedNote = {...note, important: !note.important}

      noteService.update(id, changedNote)
        .then(updatedNote =>{
            setNotes(notes.map( note => note.id !== id?note: updatedNote));
        }).catch(error=>{
            console.log(error);
            alert(
              `the note '${note.content}' was already deleted from server`
            )
            setNotes(notes.filter(n => n.id !== id))
            }
        )
  }

  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }

  const handleDeleteNote = (id) =>{
      noteService.deleteNote(id)
        .then(answerDelete =>{
            console.log(answerDelete);
        })
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

  return (

    <div>
      <h1>Notes✍🏾</h1>
      <div className='mt-3'>
        <button onClick={() => {
          setShowAll(!showAll)
        }}>
          Show {showAll ? "important notes🚨" : "all notes 📖"}
        </button>
      </div>
      <ul className='list_notes mt-4'>
        {notesToShow.map(note => {
          return <Note key={note.id} note={note} toggleImportance={()=> toggleImportanceOf(note.id)} handleDeleteNote={handleDeleteNote} />
        })}
      </ul>
      <form onSubmit={addNote}>
        <div className='row align-items-center'>
          <div className="col-7">
            <input type="text" className="form-control" onChange={handleNoteChange} value={newNote} />
          </div>
          <div className="col-auto">
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default App
