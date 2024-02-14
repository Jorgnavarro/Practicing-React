/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"


const NoteDetail = ({ notes }) => {
    //Recuperamos el parámetro que seteamos en la url y lo usamos para encontrar en el listado de notes, la nota que pasamos como props
    const id = useParams().id
    const note = notes.find(note => note.id === Number(id))
    return(
        <div>
            <h2>{note.content}</h2>
            <div>{note.user}</div>
            <div><strong>{note.important? 'important': ''}</strong></div>
        </div>
    )
}


export default NoteDetail