import { useState } from "react";
import {text} from '../assets/texts.json'

const UserTyper = () => {   

    const [isTyping, setIsTyping] = useState(0);
    
    const [timeLeft, setTimeLeft] = useState(60);
    const [mistakes, setMistakes] = useState(0);
    const [WPM, setWPM] = useState(0);
    return (  
        <div className="typerWrapper">
            <div id="words">
                { text.split("").map((char, index) =>{
                             return <span className="char" key ={index}>{char}</span>;
                    })
                }
            </div>
            <div id="typer-controls">
                <p>Time left: <strong>{timeLeft}</strong></p>  
                <p>Mistakes:<strong>{mistakes}</strong> </p>
                <p>WPM: <strong>{WPM}</strong></p>
                <button className="btn"> Restart </button>
            </div>
        </div>
        
    );
}
 
export default UserTyper;