import './App.css'
import { useState, useEffect, useContext } from 'react';
import { Note } from './components/Note';
import noteService from './services/note.js';
import { Notification } from './components/Notification';
import loginService from './services/login';
import { ContextGlobal } from './context/globalContext';


function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const {errorMessage, setErrorMessage, username, setUser, password, user} = useContext(ContextGlobal)
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [user, setUser] = useState(null)

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

  const handleLogin = async (event) => {
    event.preventDefault()
    try{
      const user = await loginService.login({
        username, password
      })
      window.localStorage.setItem(
        'loggedUserNotes', JSON.stringify(user)
      )
      noteService.setToken(user.token)
      setUser(user)
      setUsername("")
      setPassword("")
    }catch(exception){
      setErrorMessage('Wrong credentials')
      setTimeout(()=>{
        setErrorMessage(null)
      }, 5000)
    }
  }



  const loginForm = () => (
    <form onSubmit={handleLogin} id='loginForm'>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="username" 
            placeholder="Write your username here..." 
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input 
          type='password'
          className="form-control" 
          id="inputPassword" 
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
    </form>
  )

  const noteForm = () => (
  <form onSubmit={addNote} className="containerAddNote">
    <div className='row align-items-center'>
      <div className="col-9">
        <input type="text" 
        className="form-control" 
        onChange={handleNoteChange} 
        value={newNote} 
        placeholder="Write a new note here..."
        />
      </div>
      <div className="col-auto">
        <button type="submit">Save</button>
      </div>
    </div>
  </form>
  )

  return (

    <div className="containerApp">
      <h1>Notes✍🏾</h1>
      {user === null 
      ? loginForm()
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
      {user !== null && noteForm()}
    </div>
  )
}

export default App
