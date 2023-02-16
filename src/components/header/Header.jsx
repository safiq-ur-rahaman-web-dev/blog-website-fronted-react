import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className="header-titles">
            <span className='header-title-sm'>React & Node</span>
            <span className='header-title-lg'>Blog</span>
        </div>
        <img src="https://images.pexels.com/photos/15568975/pexels-photo-15568975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="header-img" />
    </div>
  )
}

export default Header