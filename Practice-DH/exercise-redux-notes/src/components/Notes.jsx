import {useSelector, useDispatch} from 'react-redux'
import { toggleImportanceOf } from '../reducers/noteReducer'
const Notes = () => {
    const dispatch = useDispatch()
    const notes = useSelector(state => state)

    const toggleImportance = (id) => {
        dispatch(toggleImportanceOf(id))
    }
    return(
        <ul className='mt-4' id='ulNotes'>
        {
            notes.map(note => {
                return <li id='noteLi' className='mb-2' key={note.id} onClick={()=>toggleImportance(note.id)}>
                              {note.content} {note.important? <button>important</button>: ''}
                          </li>
            })
        }
        </ul>
    )
}

export default Notes