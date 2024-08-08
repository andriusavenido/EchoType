import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { usePostRecord } from "../hooks/usePostRecord";
import { useEffect, useState } from "react";

const Summary = ({wpm, mistakes, timeLeft, text}) => {

    const {user} = useAuthContext();
    const {postRecord, isLoading, error} = usePostRecord();
    const [buttonState, setButtonState] = useState('');

    const handleSave = async(e) =>{
        e.preventDefault();

        await postRecord(user.username, wpm, "PLACEHOLDER",text);

        if (postRecord && !error){
            setButtonState('Saved');
        }
    }

    //make button disabled when saved.

    return ( <div className="summary">
        <h2>{timeLeft===0 ? 'You ran out of time!': 'Good Job!'}</h2>
        <p>Your final average speed was <strong className="purple">{wpm}</strong> words per minute,</p>
        <p>with <strong className="pink">{mistakes}</strong> mistakes{timeLeft===0 ? '.': ` and ${timeLeft} seconds left.`}</p>
        <p>Would you like to save your record?</p>
        {user ? 

        <button className="btn" 
            onClick={handleSave} 
            disabled={isLoading||buttonState==='Saved'||error? true:false}
        >  {isLoading ? 'Loading...' : buttonState === 'Saved' ? 'Saved' : error ? error: 'Save'}
        </button>
        
        : <Link to="/login"> You must login.</Link>}
    </div> );
}
 
export default Summary;