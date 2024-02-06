import { createNote } from "../reducers/noteReducer"
import { useDispatch } from "react-redux"
import noteService from '../services/notes'

const NewNote = () => {
  const dispatch = useDispatch();

  const addNote = async (e) => {
    e.preventDefault()
    const content = e.target.note.value
    console.log(content)
    e.target.note.value = ""
    console.log(createNote(content))
    const newNote = await noteService.createNewNote({
      content,
      important: false
    })
    
    dispatch(createNote(newNote))
  }

  return (
    <form onSubmit={addNote} id="createNote" className="formTest">
      <div id="containerInBtn" className="row align-items-center">
        <div className="col-10">
          <input
            type="text"
            className="form-control"
            placeholder="Write a new note here..."
            id="addNote"
            name="note"
          />
        </div>
        <div className="col-2">
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  )
}

export default NewNote