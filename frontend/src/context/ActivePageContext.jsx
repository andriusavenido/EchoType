import { createContext, useState} from "react";

export const ActivePageContext = createContext();

export const ActivePageContextProvider = ({children}) =>{
    const [activePage, setActivePage] = useState('HI');

    return(
        <ActivePageContext.Provider value={{activePage,setActivePage}}>
            {children}
        </ActivePageContext.Provider>
    );

}