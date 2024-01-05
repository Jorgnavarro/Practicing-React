
/* eslint-disable react/prop-types */
export const AddNoteForm = ({ addNote, handleNoteChange, newNote }) => {

    return (
        <form onSubmit={(e) => addNote(e)} className="containerAddNote">
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