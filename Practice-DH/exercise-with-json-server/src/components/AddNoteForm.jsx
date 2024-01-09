import { useState } from "react";
/* eslint-disable react/prop-types */
export const AddNoteForm = ({ createNote }) => {
    const [newNote, setNewNote] = useState("");


    const handleNoteChange = (e) => {
        setNewNote(e.target.value)
    }
    

    const addNote = (e) => {
        e.preventDefault()
        createNote({
          content: newNote,
          date: new Date(),
          important: Math.random() < 0.5,
        })
        
        setNewNote("")
      }

    return (
        <form onSubmit={addNote} className="containerAddNote">
            <div className='row align-items-center'>
                <div className="col-9">
                    <input type="text"
                        className="form-control"
                        onChange={(e) => handleNoteChange(e)}
                        value={newNote}
                        placeholder="Write a new note here..."
                    />
                </div>
                <div className="col-auto">
                    <button type="submit">Save</button>
                </div>
            </div>
        </form>
    )
}