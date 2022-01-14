import { useContext } from "react";
import { ModeContext } from "../context/modeContext";

export const useMode = () => {
    const context= useContext(ModeContext)

    //altho we wrapped entire app with context provider but we still make sure that the context is used within scope of the provider's wrap 

    if(context === undefined){
        throw new Error("out of scope of the ModeContextProvider")
    }
    
    return context 
}