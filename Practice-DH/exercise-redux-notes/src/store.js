import filterReducer from './reducers/filterReducer'
import noteReducer, { appendNote } from './reducers/noteReducer'
import { configureStore } from '@reduxjs/toolkit'
import noteService from './services/notes'

const store = configureStore({
  reducer: {
     notes: noteReducer,
     filter: filterReducer
  }
})

noteService.getAll().then(notes => {
    notes.forEach(note => {
        store.dispatch(appendNote(note))
    })
})



export default store