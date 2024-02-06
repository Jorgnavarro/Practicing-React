import filterReducer from './reducers/filterReducer'
import noteReducer from './reducers/noteReducer'
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
  reducer: {
     notes: noteReducer,
     filter: filterReducer
  }
})




export default store