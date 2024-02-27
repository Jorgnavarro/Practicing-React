/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"

const Login = (props) => {
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        props.onLogin('luis')
        navigate('/')
    }

    return(
        <Form onSubmit={handleLogin} id="loginForm" className="mb-3">
      <Form.Group className="containerInput mb-3">
        <Form.Label htmlFor="username">Username: </Form.Label>
        <Form.Control
          type="text"
          id="username"
          placeholder="Write your username here..."
          
        />
      </Form.Group>
      <Form.Group className="mb-3 containerInput">
        <Form.Label htmlFor="inputPassword" className="form-label">Password</Form.Label>
        <Form.Control
          type='password'
          className="form-control"
          id="inputPassword"
        />
      </Form.Group>
      <div>
        <Button variant="light" id='loginBtn' type='submit'>Login</Button>
      </div>
    </Form>
    )
}

export default Login