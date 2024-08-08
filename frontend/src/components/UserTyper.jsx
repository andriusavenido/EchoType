import { useEffect, useRef, useState } from "react";
import useWordBank from "../hooks/useWordBank";
import Summary from "./Summary";

const UserTyper = () => {   
 
   const {text,regenerateText}=useWordBank(30);
   const [showSummary, setShowSummary] = useState(false);

    const [typed, setTyped] = useState([]);

    const [isTyping, setIsTyping] = useState(0);
    const [charIndex, setCharIndex] = useState(0);//current index
    const [letterState, setLetterState] = useState([]);// array that keeps track of right/wrong

    const maxTime = 60;
    const [timeLeft, setTimeLeft] = useState(maxTime);
    const [mistakes, setMistakes] = useState(0);
    const [WPM, setWPM] = useState(0);

    const charRefs = useRef([]);//characters given by bank

    //event listener
    useEffect(()=>{
        setLetterState(Array(charRefs.current.length).fill(''));
        const handlePressedKey = (event) =>{
            if (
                (event.keyCode >= 48 && event.keyCode <= 57) ||  // Numbers 0-9
                (event.keyCode >= 65 && event.keyCode <= 90) ||  // Uppercase letters A-Z
                (event.keyCode >= 97 && event.keyCode <= 122) || // Lowercase letters a-z
                (event.keyCode >= 33 && event.keyCode <= 47) ||  // Punctuation !"#$%&'()*+,-./
                (event.keyCode >= 58 && event.keyCode <= 64) ||  // Punctuation :;<=>?@
                (event.keyCode >= 91 && event.keyCode <= 96) ||  // Punctuation [\]^_`
                (event.keyCode >= 123 && event.keyCode <= 126) ||  // Punctuation {|}~
                (event.keyCode ==8) || (event.keyCode ==32)
              ) {

                //check only if we are typing 
                setTyped((previous) => [...previous,event.key]);//track typed char
              }
        };

        window.addEventListener('keydown',handlePressedKey);

        //cleanup function
        return () => {
            window.removeEventListener('keydown', handlePressedKey);
          };
    },[]);

    //typed logic
    useEffect(()=>{
        if (typed.length === 0) return;
        const letters = charRefs.current;//total letters
        let currentLetter = charRefs.current[charIndex]; //holds span of letter
        let typedLetter = typed[typed.length-1];//last typed char

        if (charIndex < letters.length && timeLeft >0){
            //if not typing yet
            if (!isTyping){
                setIsTyping(true);
            }

            if (typedLetter ==='Backspace'&& charIndex!==0){

                setCharIndex(charIndex -1);
                letterState[charIndex-1]="";
            }
            else if (!(typedLetter === currentLetter.textContent)){ 
                setMistakes(mistakes +1);
                letterState[charIndex] = "wrong";
                setCharIndex(charIndex +1);
            }else if (typedLetter === currentLetter.textContent){ 
                letterState[charIndex] = "right";
                setCharIndex(charIndex +1);
            }
            
            if (charIndex === letters.length -1){
                setIsTyping(false);
                setShowSummary(true);
            }
        } else{
            setIsTyping(false);
        }
    },[typed]);

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
            setShowSummary(true);
        }
        return () =>{
            clearInterval(interval);
        }
    },[isTyping, timeLeft]);

    //typed logic handler
    const resetTypeState = () =>{
        regenerateText();
        setShowSummary(false);
        setIsTyping(false);
        setTimeLeft(maxTime);
        setCharIndex(0);
        setMistakes(0);
        setWPM(0);
        setLetterState(Array(charRefs.current.length).fill(''));
        setTyped([]);
    }

    return (  
        <>
        <div className="typerWrapper">
           {!showSummary &&<div id="words" >
                { text ? (text.split("").map((char, index) =>{
                             return <span 
                                className={`char ${index === charIndex ? "active ": ""}${letterState[index]}`}
                                key ={index}
                                ref ={(e) => charRefs.current[index] = e}>{char}</span>;
                    }))
                :<p>Loading...</p>}
            </div>}
            {showSummary && <Summary wpm = {WPM} mistakes = {mistakes} timeLeft={timeLeft} text= {text} ></Summary>}
        </div>
        <hr></hr>
        <div id="typer-controls">
                <p>Time:<strong>{timeLeft}</strong></p>  
                <p>Mistakes:<strong id="mistakes">{mistakes}</strong> </p>
                <p>WPM: <strong>{WPM}</strong></p>
                <button className="btn" onClick={resetTypeState} tabIndex={-1}>Restart</button>
            </div>
       
        </>
    );
}
 
export default UserTyper;