import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <span className="login-title">LOG IN</span>
        <form className="login-form">
            <label>Email</label>
            <input type="email" placeholder='Enter your Email' required />
            <label>Password</label>
            <input type="password" placeholder='Enter your password' required />
            <button className="login-button">LOG IN</button>
        </form>
        <button className="login-register-button">
            <Link className='link' to='/register'>REGISTER</Link>
        </button>
    </div>
  )
}

export default Login