import { createContext, useContext, useEffect, useState} from "react";

const OptionsContext = createContext();

export const OptionsContextProvider = ({children}) =>{
    const [theme, setTheme] = useState(()=>{
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme: 'default';
    });
    const [wordCount, setWordCount] = useState(30);

    //choosing theme
    useEffect(()=>{
        const root = document.documentElement;

        switch(theme){
            case 'default':
                root.style.setProperty('--logoColor', 'rgba(140,82,255,255)');
                root.style.setProperty('--shadowColor', 'rgba(56,33,102,255)');
                root.style.setProperty('--analogColor', '#e252ff');
                root.style.setProperty('--fadedColor', '#c16fd1');
                root.style.setProperty('--backgroundColor', '#221c24');
                root.style.setProperty('--typedColor', 'rgba(255, 255, 255, 0.87)');
                break;
            case 'light':
                root.style.setProperty('--logoColor', '#992aa8');
                root.style.setProperty('--shadowColor', '#9a809e');
                root.style.setProperty('--analogColor', '#D52A73');
                root.style.setProperty('--fadedColor', '#c16fd1');
                root.style.setProperty('--backgroundColor', '#e0c7e6');
                root.style.setProperty('--typedColor', '#000000');
                break;
            default:
                console.warn('Unknown theme selected');
        }

        //save theme

        localStorage.setItem('theme',theme);
    },[theme]);

    return (
        <OptionsContext.Provider value={{ theme, setTheme }}>
          {children}
        </OptionsContext.Provider>
      );
}

export const useOptionsContext = () =>{
    const context = useContext(OptionsContext);

    if (!context){
        throw Error('Error in optionsContext')
    }

    return context;
}