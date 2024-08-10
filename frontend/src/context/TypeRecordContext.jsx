import { createContext, useReducer,useContext} from 'react';

export const TypeRecordContext = createContext();

/*CLEAN UP ROUTES*/

export const typeRecordReducer = (state, action) =>{
    switch(action.type){
        
        case 'SET_RECORD':
            return{
                records: action.payload
            }
        case 'CREATE_RECORD':
            return{
                records:[action.payload, ...state.records]
            }
        case 'DELETE_RECORD':
            return{
                records: state.records.filter( r => r._id !== action.payload._id)
            }
        default:
            return state;
    }
}

export const TypeRecordContextProvider = ({children}) =>{
    const [ state, dispatch ] = useReducer(typeRecordReducer,{
        records:null
    })

    return (
        <TypeRecordContext.Provider value = {{...state,dispatch}}>
            {children}
        </TypeRecordContext.Provider>
    );

}

export const useTypeRecordContext = () =>{
    const context = useContext(TypeRecordContext);

    if (!context) {
        throw Error (' useTypeRecordContext must be used inside TypeRecordProvider.');
    }

    return context;
}