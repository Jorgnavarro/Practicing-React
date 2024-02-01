import './App.css'
//import { createNote, toggleImportanceOf } from './reducers/noteReducer'
//import {useSelector, useDispatch} from 'react-redux'
import Notes from './components/Notes'
import NewNote from './components/NewNote'




function App() {
  //-------------usando react-redux
  // ya no necesitamos usar store.dispatch porque nuestro código
  //con react-redux nos permite importar useDispatch que al almacenarlo en la constante dispatch, nos permite realizar cambios el store de redux-store
  //const dispatch = useDispatch()
  //Por otro lado useSelector, recibe una función como parámetro. La función busca o selecciona datos del store redux. Aquí necesitamos todas las notas por lo que nuestra función de selector devuelve el estado completo
  //const notes = useSelector(state => state)
  //Por lo general, las funciones de selector son un poco más interesantes y solo devuelven partes seleccionadas del contenido del store redux. Por ejemplo, podríamos devolver solo notas marcadas como importantes:
  //const importantNotes = useSelector(state => state.filter(note => note.important))  

  //El método para agregar notas es simple, este envía la acción para agregar notas al reducer
  // const addNote = (e) => {
  //   console.log("hola")
  //   e.preventDefault()
  //   const content = e.target.note.value
  //   console.log(content)
  //   e.target.note.value = ''
  //   console.log(createNote(content))
    //--------Version 1----- generateId() se movió al reducer
    // store.dispatch({
    //   type: 'NEW_NOTE',
    //   data: {
    //     content,
    //     important: false,
    //     id: generateId()
    //   }
    // })
    //--------Version 2------ refactoring code
    //creamos la función creaNote que toma el valor del input y devuelve un objeto que ya está seteado en el reducer para luego almacenarlo en el store
    //store.dispatch(createNote(content))

    //--------Version 3-------- react-redux
    //dispatch(createNote(content))
  //}

  //const toggleImportance = (id) => {
    //-----Version 1---------
    // store.dispatch({
    //   type: 'TOGGLE_IMPORTANCE',
    //   data: { id }
    // })

    //------Version 2-------refactoring code
    //store.dispatch(toggleImportanceOf(id))

    //-----Version 3--------react-redux
    //dispatch(toggleImportanceOf(id))
  //}

  //Podemos acceder el contenido de la nueva nota directamente desde el campo del formulario. Debido a que el campo tiene un nuevo nombre  <input name="note"/>, podemos acceder al contenido a través del objeto de evento e.target.note.value
  return (
    <div>
        {/*-----version with components----*/}
        <NewNote/>
        <Notes/>
        {/*-----version without components----*/}
        {/* <form onSubmit={addNote} id="createNote" className="formTest" >
            <div id="containerInBtn" className='row align-items-center'>
                <div className="col-10">
                    <input type="text"
                        className="form-control"
                        placeholder="Write a new note here..."
                        id="addNote"
                        name='note'
                    />
                </div>
                <div className="col-2">
                    <button type="submit">Save</button>
                </div>
            </div>
        </form> */}
      {/* <ul className='mt-4' id='ulNotes'>
        {
          //-------version 1
          // store.getState().map(note => {
          //   return <li id='noteLi' key={note.id} onClick={()=>toggleImportance(note.id)}>
          //             {note.content} {note.important? <button>important</button>: ''}
          //         </li>
          // })
          //-------version 2 con react-redux
          notes.map(note => {
            return <li id='noteLi' className='mb-2' key={note.id} onClick={()=>toggleImportance(note.id)}>
                      {note.content} {note.important? <button>important</button>: ''}
                  </li>
          })
        }
      </ul> */}
    </div>
  )
}

export default App
