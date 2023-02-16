import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
const Register = () => {
    return (
        <div className='register'>
            <span className="register-title">REGISTER</span>
            <form className="register-form">
                <label>Username</label>
                <input type="text" placeholder='Enter your name' required />
                <label>Email</label>
                <input type="email" placeholder='Enter your Email' required />
                <label>Password</label>
                <input type="password" placeholder='Enter your password' required />
                <button className="register-button">REGISTER</button>
            </form>
            <button className="register-login-button">
                <Link className='link' to="/login">Log in</Link>
            </button>
        </div>
    )
}

export default Register