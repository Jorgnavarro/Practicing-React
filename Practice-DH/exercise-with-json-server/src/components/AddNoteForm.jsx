import { useState } from "react";
/* eslint-disable react/prop-types */
export const AddNoteForm = ({ createNote }) => {
    //Le quitamos responsabilidad a nuestro archivo App.jsx
    //Nos traemos el estado en el cual almacenaremos la nueva nota que creemos
    const [newNote, setNewNote] = useState("");

    //También nos trajimos el controlador, que setea lo introducido a través del input
    const handleNoteChange = (e) => {
        setNewNote(e.target.value)
    }
    
    //La función con la que hacemos el submit cuando agregamos la nota, adentro consume la props createNote({}), esa prop es la que usa el service y también se encarga de renderizar la nueva nota en pantalla al concatenarla a la antigua lista de notas. Dicha props no recibe un nuevo objeto note por parámetro, de ahí la sintaxis: createNote({
    //      content: newNote,
    //     date: new Date(),
    //     important: Math.random() < 0.5,
    //    })

    const addNote = (e) => {
        e.preventDefault()
        createNote({
          content: newNote,
          date: new Date(),
          important: false,
        })
        
        setNewNote("")
      }
      //className "formTest" agregado para poder hacer test

    return (
        <form onSubmit={addNote} id="createNote" className="formTest" >
            <div className='row align-items-center'>
                <div className="col-9">
                    <input type="text"
                        className="form-control"
                        onChange={(e) => handleNoteChange(e)}
                        value={newNote}
                        placeholder="Write a new note here..."
                        id="addNote"
                    />
                </div>
                <div className="col-auto">
                    <button type="submit">Save</button>
                </div>
            </div>
        </form>
    )
}