import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

//hook that manages context error

export const useAuthContext = () =>{
    const context = useContext(AuthContext);

    if (!context) {
        throw Error (' useAuthContext must be used inside AuthContextProvider.');
    }

    return context;
}