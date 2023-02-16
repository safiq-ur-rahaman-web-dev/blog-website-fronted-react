import React from 'react'
import './Post.css'
const Post = () => {
  return (
    <div className='post'>
        <img src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="nature landscape" className="post-img" />

        <div className="post-info">
            <div className="post-cats">
                    <span className="post-cat">Music</span>
                    <span className="post-cat">Life</span>
            </div>
            <span className="post-title">Lorem, ipsum dolor sit amet</span>
            <hr />
            <span className="post-date">1 hr ago</span>
        </div>
        <p className="post-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit ipsum assumenda soluta, voluptate, exercitationem expedita, nesciunt eveniet sint nisi sequi facilis esse! Voluptate ad dolorum assumenda, iure quidem tenetur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit ipsum assumenda soluta, voluptate, exercitationem expedita, nesciunt eveniet sint nisi sequi facilis esse! Voluptate ad dolorum assumenda, iure quidem tenetur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit ipsum assumenda soluta, voluptate, exercitationem expedita, nesciunt eveniet sint nisi sequi facilis esse! Voluptate ad dolorum assumenda, iure quidem tenetur?</p>
    </div>
  )
}

export default Post