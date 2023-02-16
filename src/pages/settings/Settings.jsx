import React from 'react'
import './Settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

const Settings = () => {
  return (
    <div className='settings'>
        <div className="settings-wrapper">
            <div className="settings-title">
                <span className="settings-update-title">Update your account</span>
                <span className="settings-delete-title">Delete your account</span>
            </div>
            <form className="settings-form">
                <label>Profile Picture</label>
                <div className="settingsPP">
                <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80" alt="Profile"/>
                <label htmlFor="fileInput">
                <i className="settingsPPicon fa-solid fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display: 'none'}} accept="image/jpeg"/>
                </div>
                <label>Username</label>
                <input type="text" placeholder='Enter your name' required/>
                <label>Email</label>
                <input type="email" placeholder='Enter your email' required/>
                <label>password</label>
                <input type="password"/>
                <button className="settings-submit">Update</button>
            </form>
        </div>

        <Sidebar/>
    </div>
  )
}

export default Settings