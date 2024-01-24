import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
function Signup() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('', {name, email, password})
    .then(result => console.log(result))
    .catch(err=> console.log(err))
  }

  return (
   <div>
    <form onSubmit={handleSubmit}>
    <div>
        Name
        <input type="text" 
        placeholder='Enter Name'
        autoComplete='off'
        name='Email'
        onChange={(e) => setName(e.target.value)}
        />
    </div>
    <div>
        email
        <input type="email" 
        placeholder='Enter email'
        autoComplete='off'
        name='email'
        onChange={(e) => setEmail(e.target.value)}
        />
    </div>
    <div>
        password
        <input type="password" 
        placeholder='Enter Password'
        autoComplete='off'
        name='password'
        onChange={(e) => setPassword(e.target.value)}
        />
    </div>

    <button>Rigister</button>
    </form>

    <Link to="/login">Login</Link>
   </div>
  )
}

export default Signup
