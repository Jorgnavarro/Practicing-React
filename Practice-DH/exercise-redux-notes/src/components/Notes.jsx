import {useSelector, useDispatch} from 'react-redux'
import { toggleImportanceOf } from '../reducers/noteReducer'
const Notes = () => {
    const dispatch = useDispatch()

    //--------Version 1
    // const notes = useSelector(state =>{
    //     if(state.filter === 'ALL'){
    //         return state.notes
    //     }
    //     return state.filter === 'IMPORTANT'
    //         ? state.notes.filter(note => note.important)
    //         : state.notes.filter(note => !note.important)
    // })

    //------Version 2 desestructurando
    const notes = useSelector(({ filter, notes }) =>{
        if(filter === 'ALL'){
            return notes
        }
        return filter === 'IMPORTANT'
            ? notes.filter(note => note.important)
            : notes.filter(note => !note.important)
    })


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