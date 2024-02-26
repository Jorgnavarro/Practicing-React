/* eslint-disable react/prop-types */
//import { useParams } from "react-router-dom"


const NoteDetail = ({ note }) => {
    //Recuperamos el parámetro que seteamos en la url y lo usamos para encontrar en el listado de notes, la nota que pasamos como props
    //-------------En APP implementamos useMatch, por tanto no necesitamos hacer uso de useParams
    // const id = useParams().id
    // const note = notes.find(note => note.id === Number(id))
    return(
        <div className="containerNoteDetail">
            <h2>{note.content}</h2>
            <div>{note.user}</div>
            <div><strong>{note.important? 'important': ''}</strong></div>
        </div>
    )
}


export default NoteDetail