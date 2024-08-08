import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const usePostRecord = () => {
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);
    const {user} = useAuthContext();

    const postRecord = async (username,wpm,performance_string, word_bank) =>{
        setIsLoading(true);
        setError(true);

        const response = await fetch('/api/typeRecords/',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json','Authorization': `Bearer ${user.token}`},
            body: JSON.stringify({username,wpm,performance_string,word_bank})
        })

        const json = await response.json();

        if (!response.ok){
            setIsLoading(false);
            setError(json.error);
            return false;
        }
        if (response.ok){
            setIsLoading(false);
        }
    }
    return ( {postRecord, isLoading, error} );

}