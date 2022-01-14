import { createContext, useReducer} from "react";

export const ModeContext = createContext();

const modeReducer = (state, action) => {
    if(action.type==="CHANGE_MODE"){
        return {...state, mode: action.payload}
    }
    else{
        return state 
    }
}

export function ModeContextProvider({children}){
    //dispatch triggers the reducer function with two parameters state and action of which state is the existing state and action is the object put as parameter to dispatch 
    const [state, dispatch] = useReducer(modeReducer, {
        mode: 'white' 
    })

    const changeMode = (mode) => {
        dispatch({type: "CHANGE_MODE", payload: mode})
    }

    return (
        <ModeContext.Provider value={{...state, changeMode}}>
            {children}
        </ModeContext.Provider>
    )
}