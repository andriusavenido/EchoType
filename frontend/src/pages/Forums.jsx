import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {  ForumFieldContext } from '../context/ForumFieldContext';
import { useContext } from 'react';

import ForumPost from '../components/ForumPost';
const Forums = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const {forums, dispatch} = useContext(ForumFieldContext);
    //const [forums, setForums] = useState[''];

    //search query 
    const filteredForums = forums.filter(forum =>
        forum.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const fetchForums = async () => {
            const response = await fetch('/api/forumPosts/fp', {
            })
            
            const json = await response.json()

            if (response.ok){
                //setWorkouts(json)
                dispatch({type: 'SET_FORUM', payload: json})
                //console.log(json)
                //setForums(json)
                //console.log(json)
            }
            //console.log('helo')
        }

        fetchForums()
      
    }, [dispatch])

    return ( 
        
        <div className="forums">
            
           
<div class="inputBox_container">
  <svg class="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
    <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
    </path>
  </svg>
  <input class="inputBox" id="inputBox" type="text" placeholder="Search For Post" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
</div>

            <div className="lb-wrapper">
                {filteredForums && filteredForums
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by newest to oldest
                    .map((hs) => (
                        <ForumPost 
                            key={hs._id} 
                            username={hs.username} 
                            title={hs.title} 
                            body={hs.body} 
                            createdAt={hs.createdAt} 
                        />
                    ))
                } 
            </div>
                
            <Link to = '/forums/post' className="Btn">Post 
                <svg className="svg" viewBox="0 0 512 512">
                 <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
             </Link>
        </div>
     );
}
 
export default Forums;