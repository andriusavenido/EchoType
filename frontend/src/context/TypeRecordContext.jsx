import { createContext, useReducer} from 'react';

export const TypeRecordContext = createContext();

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
        case 'DELETE_WORKOUT':
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