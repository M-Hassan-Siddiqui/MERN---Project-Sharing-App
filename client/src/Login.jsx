import { useState } from 'react'
import { Link } from 'react-router-dom'
function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
  return (
   <div>
    <form> 
    <div>
        Emal
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
    <button>login</button>
    </form>
    <Link to="/register">Register</Link>
   </div>
  )
}

export default Login
