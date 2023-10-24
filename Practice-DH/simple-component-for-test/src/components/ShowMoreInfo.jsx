import { useState } from "react"

export function ShowMoreInfo ({title, children}){
    const [show, setShow] = useState(false);

    function handleParagraph(){
        setShow(!show);
    }
    return(
        <div>
            <h2 className="mt-4">{title}</h2>
            {show?<p>{children}</p>:undefined}
            <button className="btn btn-info" onClick={handleParagraph}>
                {show?"See less...":"See more..."}
            </button>
        </div>
    )
}