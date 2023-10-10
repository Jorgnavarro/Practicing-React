import { useEffect } from "react";
export function Color ({selectedColor, suffle}){


    
    return(
        <div>
            <h3>{selectedColor}</h3>
            <button onClick={suffle}>Set new color</button>
        </div>
    )
}