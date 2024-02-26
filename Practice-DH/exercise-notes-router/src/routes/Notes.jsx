/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import { Table } from "react-bootstrap"

//Acá enviamos como parámetro el id de la nota a la cual hagamos click
const Notes = ({notes}) => {
    return(
        <div className="containerListNotes">
            <h2>Welcome to Notes sections</h2>
            <Table className="tableNotes" striped>
                <tbody>
                    {notes.map(note => {
                        return  <tr key={note.id} >
                                    <td>
                                        <Link className="links" to={`/notes/${note.id}`}>
                                            {note.content}
                                        </Link>
                                    </td>
                                    <td>
                                        {note.user}
                                    </td>
                                </tr>
                    })
                    }
                </tbody>
            </Table>
        </div>
    )
}


export default Notes