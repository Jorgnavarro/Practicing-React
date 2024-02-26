/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

const Login = (props) => {
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        props.onLogin('luis')
        navigate('/')
    }

    return(
        <form onSubmit={handleLogin} id="loginForm" className="mb-3">
      <div className="mb-3 containerInput">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Write your username here..."
          
        />
      </div>
      <div className="mb-3 containerInput">
        <label htmlFor="inputPassword" className="form-label">Password</label>
        <input
          type='password'
          className="form-control"
          id="inputPassword"
        />
      </div>
      <div>
        <button id='loginBtn' type='submit'>Login</button>
      </div>
    </form>
    )
}

export default Login