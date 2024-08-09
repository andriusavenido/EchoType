import { useState } from "react";
import { ForumFieldContext, useForumFieldContext } from "../context/ForumFieldContext";
import { useAuthContext } from "./useAuthContext";

export const useForumPost = () =>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useForumFieldContext();
    const {user} = useAuthContext();

    const forumpost = async (username, title, body) =>{
        setIsLoading(true)
        setError(null)

        
        const response = await fetch('/api/forumPosts/',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json', 'Authorization': `Bearer ${user.token}`},
            body: JSON.stringify({username, title, body}),
          
        });

        const json = await response.json();//res is {email,token}
        console.log('JSON::::',json)
        if (response.ok){
        
            
            //update auth context
            dispatch({type:'CREATE_FORUM', payload: json});

            setIsLoading(false);
        }
        return true;
        
    }

    return {forumpost}

}