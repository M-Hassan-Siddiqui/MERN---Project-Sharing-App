import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from "react-router-dom"


function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const Navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "success") {
                    Navigate('/home')
                }
            })
            .catch(err => console.log(err))
    }

    return (



        <div className="form-modal ">
    
        <div className="form-toggle">
            <button id="login-toggle" style={{background: '#57b846' , color: '#ffff'}}>log in</button>
            <Link to="/register"><button id="signup-toggle">Sign up</button></Link>
        </div>
    
        <div id="login-form">
        <form onSubmit={handleSubmit}>
          <input type="email"
            placeholder='Enter your email'
            autoComplete='on'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="password"
            placeholder='Enter Password'
            autoComplete='off'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
          />
                <button className="btn login">login</button>
            </form>
        </div>

    
    </div>






        // <div>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             Emal
        //             <input type="email"
        //                 placeholder='Enter email'
        //                 autoComplete='off'
        //                 name='email'
        //                 onChange={(e) => setEmail(e.target.value)}
        //             />
        //         </div>
        //         <div>
        //             password
        //             <input type="password"
        //                 placeholder='Enter Password'
        //                 autoComplete='off'
        //                 name='password'
        //                 onChange={(e) => setPassword(e.target.value)}
        //             />
        //         </div>
        //         <button >login</button>
        //     </form>
        //     <Link to="/register">Register</Link>
        // </div>
    )
}

export default Login
