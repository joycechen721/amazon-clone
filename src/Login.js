import React from 'react'
import "./Login.css"
import {Link} from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div className = "login">
            <Link to = './Home.js'> 
                <img className = "login_logo" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png"></img>
            </Link>

            <div className = "login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type = "text" value = {email} onChange = {e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type = "password" />

                    <button className = "login_registerButton">Sign In</button>
                </form>

                <p>By signing in, you agree to Amazon's conditions of use and sale. please see our privacy notice, etc.</p>

                <button className = "login_signInButton">Create new Amazon account</button>
            </div>
        </div>
    )
}

export default Login

//maps what the user types into "email"