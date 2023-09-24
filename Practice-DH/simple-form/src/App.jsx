import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUserName = (e) =>{
      setEmail(e.target.value);
  }

  const onChangePassword = (e) =>{
    setPassword(e.target.value);
  }
  
  const onSubmitForm = (e) =>{
      e.preventDefault();
      Swal.fire({
        icon: 'success',
        title: `Welcome ${email}!!`
      })
  }

  return (
    <form className='form'>
      <h2 className='header-form'>Sing In</h2>
      <div className="mb-3">
        <input type="email" id='inputEmail' className="form-control form-control-lg"  placeholder="name@example.com" onChange={onChangeUserName} />
      </div>
      <div className="mb-3">
        <input type="password" id="inputPassword" className="form-control form-control-lg" placeholder='Password' onChange={onChangePassword}/>
      </div>
        <button type="submit" className="btn btn-danger btn-form mt-3"
        onClick={onSubmitForm}
        >Login</button>
    </form>
  )
}

export default App
