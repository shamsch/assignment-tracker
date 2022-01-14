import { createContext } from "react";

export const ModeContext = createContext();

export function ModeContextProvider({children}){


    return (
        <ModeContext.Provider value={{mode: 'white'}}>
            {children}
        </ModeContext.Provider>
    )
}