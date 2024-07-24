import { useEffect, useRef, useState } from "react";
import useWordBank from "../hooks/useWordBank";


const UserTyper = () => {   
    const {text} = useWordBank(0);

    const [isTyping, setIsTyping] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [letterState, setLetterState] = useState([]);

    const maxTime = 60;
    const [timeLeft, setTimeLeft] = useState(maxTime);
    const [mistakes, setMistakes] = useState(0);
    const [WPM, setWPM] = useState(0);

    const inputRef = useRef(null);
    const charRefs = useRef([]);

    //start of render
    useEffect(()=>{
        inputRef.current.focus();
        setLetterState(Array(charRefs.current.length).fill(''));
    },[]);

    //timer effect || calculate stats
    useEffect(()=>{
        let interval;
        if (isTyping && timeLeft>0){
            interval = setInterval(()=>{

                setTimeLeft(timeLeft -1);
                let correct = charIndex - mistakes;
                let totalTime = maxTime - timeLeft;

                let wpm =  Math.round((correct/5/ totalTime) *60);
                wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;//error check
                setWPM(wpm);

            }, 1000)
        } else if (timeLeft ===0){
            clearInterval(interval);
            setIsTyping(false);
        }
        return () =>{
            clearInterval(interval);
        }
    },[isTyping, timeLeft]);

    //typed logic handler
    const handleChange = (e) =>{
        const letters = charRefs.current;
        let currentLetter = charRefs.current[charIndex]; //holds span of letter
        let typedLetter = e.target.value.slice(-1);//last typed char

        if (charIndex < letters.length && timeLeft >0){
            //if not typing yet
            if (!isTyping){
                setIsTyping(true);
            }
            //mistake
            if (!(typedLetter === currentLetter.textContent)){ 
                setMistakes(mistakes +1);
                letterState[charIndex] = "wrong";
            }else if (typedLetter === currentLetter.textContent){ 
                letterState[charIndex] = "right";
            }

            setCharIndex(charIndex +1); //add increase pointer

            if (charIndex === letters.length -1){
                setIsTyping(false);
            }
        } else{
            setIsTyping(false);
        }
    }

    const resetTypeState = () =>{
        setIsTyping(false);
        setTimeLeft(maxTime);
        setCharIndex(0);
        setMistakes(0);
        setWPM(0);
        setLetterState(Array(charRefs.current.length).fill(''));
        inputRef.current.focus();
        inputRef.current.value = '';
    }



    return (  
        <>
        <div className="typerWrapper">
            <div id="words" onClick={ () => inputRef.current.focus()}>
                <input type="text" id="input-field" ref = {inputRef} onChange ={handleChange}/>
                { text.split("").map((char, index) =>{
                             return <span 
                                className={`char ${index === charIndex ? "active ": ""}${letterState[index]}`}
                                key ={index}
                                ref ={(e) => charRefs.current[index] = e}>{char}</span>;
                    })
                }
            </div>
        </div>
        <div id="typer-controls">
                <p>Time:<strong>{timeLeft}</strong></p>  
                <p>Mistakes:<strong id="mistakes">{mistakes}</strong> </p>
                <p>WPM: <strong>{WPM}</strong></p>
                <button className="btn" onClick={resetTypeState}>Restart</button>
            </div>
        </>
    );
}
 
export default UserTyper;