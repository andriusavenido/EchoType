import { useState } from "react";
import {useAuthContext} from './useAuthContext';


export const useLogin = () =>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) =>{
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/users/login',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({email, password})
        });

        const json = await response.json();//res is {email,token}

        if (!response.ok){
            setIsLoading(false);
            setError(json.error);
            return false;
        }
        if (response.ok){
            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json)); 
            
            //update auth context
            dispatch({type:'LOGIN', payload: json});

            setIsLoading(false);
        }
        return true;
    }

    return {login, isLoading, error}

}