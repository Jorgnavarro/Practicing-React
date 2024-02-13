//import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './routes/Home'
import Users from './routes/Users'
import Notes from './routes/Notes'

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


  return (
    <div>
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
      <div>
      <Link className='p-2' to='/' >Home</Link>
      <Link className='p-2' to='/notes' >Notes</Link>
      <Link className='p-2' to='/users' >Users</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
      <div>
        {/* {content()} */}
        <i>Note app, Department of Computer Science 2023</i>
      </div>
    </div>
  )
}

export default App
