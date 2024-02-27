/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, Navigate, useMatch } from 'react-router-dom'
import Home from './routes/Home'
import Users from './routes/Users'
import Notes from './routes/Notes'
import NoteDetail from './components/NoteDetail'
import Login from './routes/Login'
import { Alert } from 'react-bootstrap'

/*
*Routing
La representación condicional de componentes basada en URL en el navegador, se utiliza
colocando componentes como hijos del componente Router, es decir, dentro de las etiquetas
del Router (esto definido en el archivo main.jsx)

BrowserRouter es un Router que usa la API de historial de HTML5 (pushState, replaceState y el evento popState)
para mantener su interfaz de usuario sincronizada con la URL.

Dentro del router definimos enlaces que modifican la barra de direcciones con la ayuda del componente Link
crea un enlace en la aplicación con el texto notes, que cuando se clickea cambia la URL en la barra de direcciones a "/notes" en el siguiente caso: <Link to='/notes'>Notes</Link>
*/





// const Home = () =>  (
//   <div> <h2>TKTL notes app</h2> </div>
// )

// const Notes = () => (
//   <div> <h2>Notes</h2> </div>
// )

// const Users = () => (
//   <div> <h2>Users</h2> </div>
// )

function App() {
  // const [page, setPage] = useState('home')

  // const toPage = (e, page) => {
  //   e.preventDefault()
  //   setPage(page)
  // }

  // const content = () => {
  //   switch(page){
  //     case 'home':
  //       return <Home/>
  //     case 'notes':
  //       return <Notes/>
  //     case 'users':
  //       return <Users/>
  //     default:
  //       return page
  //   }
  // }

/*Los componentes renderizados según la URL del navegador se definen con la ayuda del componente Route

<Route path='/notes' element={<Notes/>}/>
*/


const [user, setUser] = useState(null)

const [message, setMessage] = useState(null)

const login = (user) => {
  setUser(user)
  setMessage(`Welcome ${user}`)
  setTimeout(()=>{
    setMessage(null)
  }, 2000)
}


const [notes, setNotes] = useState([
  {
    id: 1,
    content: 'HTML is easy',
    important: true,
    user: 'Matti Luukkainen'
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false,
    user: 'Matti Luukkainen'
  },
  {
    id: 3,
    content: 'Most important methods of HTTP-protocol are GET and POST',
    important: true,
    user: 'Arto Hellas'
  }
])

const match = useMatch('/notes/:id')

const note = match 
 ? notes.find(note => note.id === Number(match.params.id))
 : null


  return (
    <div className='containerApp'>
      {/* <div>
        <a href='' onClick={(e)=> toPage(e, 'home')} className='p-2' >
          Home
        </a>
        <a href='' onClick={(e) => toPage(e, 'notes')} className='p-2' >
          Notes
        </a>
        <a href='' onClick={(e) => toPage(e, 'users')} className='p-2' >
          Users
        </a>
      </div> */}
      <div className='navBar'>
      <Link className='p-2 links' to='/'>Home</Link>
      <Link className='p-2 links' to='/notes' >Notes</Link>
      <Link className='p-2 links' to='/users' >Users</Link>
      {user 
        ? <em>{user} logged in</em>
        : <Link className='p-2 links' to='/login' >Login</Link>
      }
      </div>
      {(message && <Alert className='mt-3' variant='success'>
        {message}
      </Alert>)}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login onLogin={login}/>}/>
        {/*Si un usuario no ha iniciado sesión, el componente Users no se renderiza. En su lugar, el usuario es redirigido mediante el componente Navigate a la vista de inicio de sesión */}
        <Route path='/users' element={ user ? <Users/>: <Navigate replace to ='/login'/>}/>
        <Route  path='/notes' element={<Notes notes={notes}/>}/>
        {/*Abajo estamos definiendo un ruta parametrizada, el cual se marca después del "/" con dos puntos : 
        seguido del nombre que queremos darle al parámetro /:id, esto podemos recuperarlo en cualquier componente
        de nuestra aplicación usando useParams.id, si esto lo almacenamos en una variable, nos devolverá su valor
        */}
        {/*Si estamos usando useMatch, entonces recuperamos el parámetro para hacer la búsqueda en el componente principal y ahorrarle trabajo al componente NoteDetail al buscar la note, nos ahorramos ese proceso y pasamos la nota recuperada con el parámetro /:id por props con la constante "note" */}
        <Route path='/notes/:id' element={<NoteDetail note={note}/>}/>
      </Routes>
      <div className='footerText'>
        {/* {content()} */}
        <i>Note app, Department of Computer Science 2023</i>
      </div>
    </div>
  )
}

export default App
