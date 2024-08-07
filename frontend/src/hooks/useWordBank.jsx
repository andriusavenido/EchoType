import {banks} from '../assets/texts.json'
import {generate} from "random-words";

const useWordBank =  (wordCount) => {
    const text = generate(wordCount).toString().replaceAll(',',' ');
    
    return ({text});
}
 
export default useWordBank;