import React from 'react'
import { Link } from 'react-router-dom'
import './Topbar.css'

const Topbar = () => {
  const user = false
  return (
    <div className='top'>
      <div className="top-left">
        <i className="top-icon fa-brands fa-instagram"></i>
        <i className="top-icon fa-brands fa-linkedin-in"></i>
        <i className="top-icon fa-brands fa-github"></i>
      </div>

      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
            <Link to="/" className='link'>Home</Link>
          </li>
          <li className="top-list-item">
            <Link to="/" className='link'>About</Link>
            </li>
          <li className="top-list-item">
            <Link to="/" className='link'>Contact Us</Link>
            </li>
          <li className="top-list-item">
              <Link to="/write" className='link'>Write</Link>
          </li>
          <li className="top-list-item">
            {user && "LOG OUT"}
          </li>
        </ul>
      </div>

      <div className="top-right">
        {user ? (<img
          className='top-img'
          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80" alt="Profile" />) :(
            <ul className="top-list">
              <li className="top-list-item">
              <Link className='link' to="/login">LOG IN</Link>
              </li>
              <li className="top-list-item">
              <Link className='link' to="/Register">REGISTER</Link>
              </li>
            </ul>
          )}
        
        <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Topbar