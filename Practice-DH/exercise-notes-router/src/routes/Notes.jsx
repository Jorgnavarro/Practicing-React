/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

//Acá enviamos como parámetro el id de la nota a la cual hagamos click
const Notes = ({notes}) => {
    return(
        <div>
            <h2>Welcome to Notes sections</h2>
            <ul className="ulList">
                {notes.map(note => {

                    return <li key={note.id} >
                             <Link to={`/notes/${note.id}`} >
                               {note.content}
                             </Link>
                          </li>
                })

                }
            </ul>
        </div>
    )
}


export default Notes