import React from 'react'
import './Write.css'

const Write = () => {
  return (
    <div className='write'>
      <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="uploaded pic" className="write-img" />
        <form className="write-form">
            <div className="write-form-group">
                <input type="text" placeholder='Title' className='write-input'/>
                <label htmlFor="file-input">
                <i title="Add Photo"className="write-icon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="file-input" style={{display: 'none'}} accept="image/jpeg"/>
            </div>
            <div className="write-form-group">
                <textarea placeholder='Tell your story' type="text" className='write-input write-text'/>
            </div>
            <button className="write-submit">Publish</button>
        </form>
    </div>
  )
}

export default Write