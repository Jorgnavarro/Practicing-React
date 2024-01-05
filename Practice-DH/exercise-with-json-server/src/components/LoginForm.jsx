import { useContext } from 'react'
import { ContextGlobal } from '../context/globalContext'
import loginService from '../services/login'
import noteService from '../services/note'

//Este componente consume el contexto y se encarga de recibir las credenciales envíadas por el user, en caso de ser correctas las almacena en el localStorage con el token remitido por el back.
//Al consume el noteService que tiene el setToken que hace la configuración requerida para enviar en la cabecera el token válido que permita crear una nueva nota

//Los valores guardados en el almacenamiento son DOMstrings, por lo que no podemos guardar un objeto Javascript tal cual. El objeto debe analizarse primero en JSON, con el método JSON.stringify. En consecuencia, cuando se lee un objeto JSON del almacenamiento local, debe parsearse de nuevo a Javascript con JSON.parse.
//window.localStorage.setItem('loggedUserNotes', JSON.stringify(user))
export function LoginForm() {
const {setErrorMessage, username, setUsername, setUser, password, setPassword} = useContext(ContextGlobal)
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

    //El estado de la aplicación tiene los campos username y password para almacenar los datos del formulario. Los campos de formulario tienen controladores de eventos, que sincronizan cambios en el campo con el estado del componente. Los controladores de eventos son simples, se les da un objeto como parámetro, y desestructuran el campo target del objeto y guardan su valor en el estado. Por ello, la sintaxis onChange = {({target}) => setUsername(target.value)}
    return (
        <form onSubmit={handleLogin} id='loginForm' className="mb-3">
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
}