import React from 'react'

export default function ForumField() {
  return (
    <div className="signup">
    <form className="signup-form" onSubmit={handleSubmit}>
        <h3>Post an Echo</h3>
        <label htmlFor="">Message</label>
        <input type="text"
            onChange = {(e) => setUsername(e.target.value)}
            value = {username}
         />
    
        {error && <div className="error">Error: {error}</div>}
    </form>
</div>
  )
}
