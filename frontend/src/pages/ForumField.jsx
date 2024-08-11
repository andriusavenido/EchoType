import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext';
import { useForumPost } from '../hooks/useForumPost';

export default function ForumField() {

  const {user} = useAuthContext()
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  const {forumpost} = useForumPost();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const username= user.username;
    console.log('Here')

    //const response = await fetch('/api/forumPosts/',{
    
    const post = await forumpost({username: username}, title, message);
    console.log(username, title, message)
    console.log('DONE')
    console.log(post)
    if (post){
      navigate('/forums');
   
     }
    
   
}

  return (
    <div className="signup">
    <form className="signup-form" onSubmit={handleSubmit}>
        <h3>Post an Echo</h3>

        <label htmlFor="">Title</label>
        <input type="text"
            onChange = {(e) => setTitle(e.target.value)}
            value = {title}
         />

        <label htmlFor="">Message</label>
        <input type="text"
            onChange = {(e) => setMessage(e.target.value)}
            value = {message}
         />
      <button className="btn">Post</button>
        
    </form>
</div>
  )
}
