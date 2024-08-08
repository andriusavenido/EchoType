import { useCallback, useEffect, useState } from 'react';
import {generate} from "random-words";

const useWordBank =   (wordCount) => {
    const [text, setText] = useState('');

    const regenerateText = useCallback(() =>{
        try{
            const generatedText = generate(wordCount);
            setText(generatedText.toString().replaceAll(',',' '))
        }catch(err){
            console.error(err);
        }
    },[wordCount]);

    useEffect(() => {
        regenerateText(); // initial regeneration
      }, [regenerateText]); 

    return ({text,regenerateText});
}
 
export default useWordBank;