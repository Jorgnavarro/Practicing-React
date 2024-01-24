import './App.css'
import { useState, useEffect, useContext, useRef } from 'react';
import { Note } from './components/Note';
import noteService from './services/note.js';
import { Notification } from './components/Notification';
import { ContextGlobal } from './context/globalContext';
import LoginForm  from './components/LoginForm'
import { AddNoteForm } from './components/AddNoteForm'
import { HeaderUserInfo } from './components/HeaderUserInfo'
import Togglable  from './components/Togglable'


function App() {
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const {errorMessage, setErrorMessage, setUser, user} = useContext(ContextGlobal)
  //Vamos a tomar la función que setea la visibilidad de los componentes en el Togglable, en este caso la función es ToggleVisibility
  //Lo que queremos lograr es que al momento de crear una nueva nota, se oculte el formulario.
  const noteFormRef = useRef()
  
  useEffect(() => {
    console.log("effect");
    noteService.getAll()
    .then(initialNotes =>{
        setNotes(initialNotes);
    })

  }, [])

  

  //Acá se comprueba que el usuario ha iniciado sesión y que sus datos se encuentrar en el localStorage

  useEffect(() => {
    const loggeUserJSON = window.localStorage.getItem('loggedUserNotes')
    if(loggeUserJSON){
      const user = JSON.parse(loggeUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  },[setUser])

  //----Antes de refactorizar el agregar una nota

  /**
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
   */
   //Refactorizando-code, separando el servicio del controlador de eventos que envía el formulario en el componente addNoteForm, el manejador en ese componente se llama addNote y dentro de ese, se llama la función de abajo, la cual se pasa por props con el nombre de createNote = {addNote} y se consume en el hijo, en el manejador.
  
  //al usar el useRef, este es el último paso, hacemos uso de la función dentro del otro componente con la sintaxis noteFormRef.current.toggleVisibility(), al crear una nueva nota, cuando se renderice el componente, visible será false y se ocultará el formulario para crear una nota
  const addNote = (noteObject) => {
      noteFormRef.current.toggleVisibility()
      noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
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

  //Se implementan renderizados condicionales pero con una nueva sintaxis
  //en el primer renderizado  condicional, user === null ? <loginForm/> :
  //<div><p>{user.name} logged-in</p></div>, se indica que si el usuario está vacío se habilita el formulario para iniciar sesión, en caso contrario se renderiza el nombre seguido del texto logged-in
  //En el segundo renderizado: user !== null && <AddNoteForm addNote={addNote} handleNoteChange={handleNoteChange} newNote={newNote}
  //Se aplica un truco de React, si la primera declaración es falsa o falsy, la segunda declaración no se ejecutará la seguida después del &&, 
  //si el usuario está logueado aparecerá el input para agregar una nota, de lo contrario, es decir si el user está vacío no aparecerá el campo.

  return (

    <div className="containerApp">
      <h1>Notes✍🏾</h1>
      {user === null 
      ? <Togglable buttonLabel="Log-in" className="containerForm">
          <LoginForm/>
        </Togglable>
      : <HeaderUserInfo/>
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
      {/*Acá consumimos el useRef, le pasamos noteFormRef que ya
        iniciamos arriba por props al componente Togglable
       */}
      {user !== null && <Togglable className="containerAddNote" buttonLabel="Create a new note" ref={noteFormRef}>
                          <AddNoteForm createNote={addNote}/> 
                        </Togglable>
      }
    </div>
  )
}

export default App
