import './App.css'
import { useState, useEffect, useContext } from 'react';
import { Note } from './components/Note';
import noteService from './services/note.js';
import { Notification } from './components/Notification';
import { ContextGlobal } from './context/globalContext';
import { LoginForm } from './components/LoginForm'
import { AddNoteForm } from './components/AddNoteForm'


function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const {errorMessage, setErrorMessage, setUser, user} = useContext(ContextGlobal)

  useEffect(() => {
    console.log("effect");
    noteService.getAll()
    .then(initialNotes =>{
        setNotes(initialNotes);
    })

  }, [])

  useEffect(() => {
    const loggeUserJSON = window.localStorage.getItem('loggedUserNotes')
    if(loggeUserJSON){
      const user = JSON.parse(loggeUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  },[setUser])


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
            setErrorMessage(
              `the note '${note.content}' was already deleted from server`
            )
            console.log(error);
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setNotes(notes.filter(n => n.id !== id))
            }
        )
  }

  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }

  const handleDeleteNote = (id) =>{
      noteService.deleteNote(id)
        .then(answer =>{
            if(answer.status === 200){
              console.log(`The note with id: ${id} was succesfully deleted`);
            }
        })
        .catch(error =>{
            console.log(error);
            if(error.message === "Network Error"){
                alert("Connection to the server has a problem, try again later...");
            }
        })
      setNotes(notes.filter(n => n.id !== id))
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);


  return (

    <div className="containerApp">
      <h1>Notes✍🏾</h1>
      {user === null 
      ? <LoginForm/>
      : <div>
          <p>{user.name} logged-in</p>
        </div> 
      }
      <Notification message={errorMessage}/>
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
      {user !== null && <AddNoteForm addNote={addNote} handleNoteChange={handleNoteChange} newNote={newNote} />}
    </div>
  )
}

export default App
