import { useContext } from 'react'
import { ContextGlobal } from '../context/globalContext'



export function HeaderUserInfo() {
    const { user, setUser } = useContext(ContextGlobal)

    const handleLogout = () => {
        window.localStorage.removeItem('loggedUserNotes')
        setUser(null)
    }


    return(
        <div className='headerUser'>
            <p className='mt-3'>{user.name} logged-in</p>
            <button className='btn btn-outline-light' onClick={handleLogout}>Logout</button>
        </div>
    )
}