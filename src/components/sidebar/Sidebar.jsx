import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>

      <div className="sidebar-item">
        <span className="sidebar-title">About Me</span>
        <img src="https://images.pexels.com/users/avatars/435424391/safiqur-rahaman-526.jpg?auto=compress&fit=crop&h=130&w=130&dpr=1" alt="profile" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officiis, fugit eveniet officia ipsa sapiente fuga libero, saepe tenetur labore vero quo aperiam ipsam id. Aut ut perspiciatis ipsa ad!</p>
      </div>

      <div className="sidebar-item">
        <span className="sidebar-title">Categories</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Style</li>
          <li className="sidebar-list-item">Sports</li>
          <li className="sidebar-list-item">Tech</li>
          <li className="sidebar-list-item">Cinema</li>
        </ul>
      </div>

      <div className="sidebar-item">
        <span className="sidebar-title">Follow us</span>
        <div className="sidebar-social">
          <i className="sidebar-icon fa-brands fa-instagram"></i>
          <i className="sidebar-icon fa-brands fa-linkedin-in"></i>
          <i className="sidebar-icon fa-brands fa-github"></i>
        </div>
      </div>

    </div>
  )
}

export default Sidebar