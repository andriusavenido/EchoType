import { createContext, useReducer,useContext} from 'react';

export const ForumFieldContext = createContext();

export const forumFieldReducer = (state, action) =>{
    switch(action.type){
        
        case 'SET_FORUM':
            return{
                forums: action.payload
            }
        case 'CREATE_FORUM':
            return{
                forums:[action.payload, ...state.forums]
            }
        default:
            return state;
    }
}

export const ForumFieldContextProvider = ({children}) =>{
    const [ state, dispatch ] = useReducer(forumFieldReducer,{
        forums:[]
    })

    return (
        <ForumFieldContext.Provider value = {{...state,dispatch}}>
            {children}
        </ForumFieldContext.Provider>
    );

}

export const useForumFieldContext = () =>{
    const context = useContext(ForumFieldContext);

    if (!context) {
        throw Error (' useForumFieldContext must be used inside AuthContextProvider.');
    }

    return context;
}