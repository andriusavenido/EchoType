import {banks} from '../assets/texts.json'

const useWordBank = (key) => {
    const text = banks[key];

    return ({text});
}
 
export default useWordBank;