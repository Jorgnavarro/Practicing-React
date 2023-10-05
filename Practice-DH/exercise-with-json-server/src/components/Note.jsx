export function Note({note, toggleImportance, handleDeleteNote}){

    const label = note.important?
        'make not important': 'make important';

    return(
        <li className="mt-1">
            {note.content}
            <button className="mx-2" onClick={toggleImportance}>{label}</button>
            <button className="btn btn-danger" onClick={()=>handleDeleteNote(note.id)}>Delete</button>
        </li>
    )
}