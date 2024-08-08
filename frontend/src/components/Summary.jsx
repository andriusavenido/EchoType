import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Summary = ({wpm, mistakes, timeLeft, text}) => {

    const {user} = useAuthContext();

    const handleSave = () =>{

    }

    return ( <div className="summary">
        <h2>{timeLeft===0 ? 'You ran out of time!': 'Good Job!'}</h2>
        <p>Your final average speed was <strong className="purple">{wpm}</strong> words per minute,</p>
        <p>with <strong className="pink">{mistakes}</strong> mistakes{timeLeft===0 ? '.': ` and ${timeLeft} seconds left.`}</p>
        <p>Would you like to save your record?</p>
        {user ? <button className="btn" onClick={handleSave}>Save</button>: <Link to="/login"> You must login.</Link>}
    </div> );
}
 
export default Summary;