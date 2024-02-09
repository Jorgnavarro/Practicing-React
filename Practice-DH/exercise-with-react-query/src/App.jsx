
import './App.css'
import { useQuery, useMutation, useQueryClient } from 'react-query'
//import axios from 'axios'
import { getNotes, createNote, updateNote } from './requests'


/* 
* * ¿PARA QUÉ REACT QUERY?
Es una biblioteca versátil que, basada en lo que ya hemos visto, simplifica la aplicación. ¿Hace React Query soluciones
de gestión de estados tan complejas como Redux? No. React Query puede reemplazar parcialmente el estado de la aplicación en algunos casos:

*REACT Query es una librería de estado del servidor, responsable de la gestión de operaciones asíncronas entre el servidor y el cliente

*Redux, etc. son librerías de estado del cliente que se pueden usar para almacenar datos asíncronos, aunque de manera menos eficiente cuando se comparan con una herramienta como React Query

Entonces, React Query es una librería que mantiene el estado del servidor en el frontend, es decir, actúa como una caché para lo que se almacena en el servidor. React Query simplifica el procesamiento de datos en el servidor y, en algunos casos, puede eliminar la necesidad de que los datos en el servidor se guarden en el estado del frontend.

 */


//Aunque la apliación funciona bien, la solución no es la más óptima, porque después de hacer un PUT para cambiar la importancia de las notas, se hace una petición GET, con las notas actualizadas. Si la aplicación no es muy grande, esto representaría un problema, pero con una aplicación más robusta, el funcionamiento de la misma decaería por la ocupación del servidor, por ello necesitamos optimizar el rendimiento de la misma.


function App() {
  const queryClient = useQueryClient()
  //**Para crear un nueva nota se define una mutación usando la función useMutation
  //Para renderizar una nueva nota, debemos decirle a React Query que el resultado antiguo cuya clave es el string notes debe ser invalidado. Para ello, definimos la función de devolución de llamada onSuccess apropiada para la mutación. Se tiene que hace entre llaves como segundo parámetro de useMutation
  const newNoteMutation = useMutation(createNote, {
    //Recordemos que en el archivo requests.js se pasa como parámetro de createNote, "newNote" con el contenido y esa llamada devuelve una nota creada en el servidor, que ahora vamos a setear en queryClient.setQueryData, para que se haga el cambio en el Front sin realizar una nueva llamada al servidor
    onSuccess: (newNote) => {
      //Cuando la mutación se ha ejecutado con éxito se hace una llamada a la función, esto hace que React Query actualice automáticamente la consulta con la clave "notes", es decir que recupera nuevamente las notas del servidor. como resultado, la aplicación renderiza el estado actualizado en el servidor, por lo que la nota agregada también se representa
      //queryClient.invalidateQueries('notes')
      //**------------------------Optimizando el rendimiento
      const notes = queryClient.getQueryData('notes')
      console.log(notes)
      queryClient.setQueryData('notes', notes.concat(newNote))
    }
  })


  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    console.log(content)
    newNoteMutation.mutate({
      content,
      important: true
    })
  }

  //Ahora creamos la mutación cambiando la importancia de las notas. Esta mutación invalida la consulta notes para que la nota actualizada se representara correctamente.Usar mutación es fácil, el método mutate recibe una nota como parámetro cuya importancia se cambia a la negación del valor antiguo.

  const updateNoteMutation = useMutation(updateNote, {
    onSuccess: () => {
      queryClient.invalidateQueries('notes')
    }
  })

  const toggleImportance = (note) => {
    console.log('toggle importance of', note.id)
    updateNoteMutation.mutate({
      ...note, 
      important: !note.important
    })
  }

  //La recuperación de datos del servidor aún se realiza de la forma familiar con el método get de axios. Sin embargo, la llamada al método axios ahora está envuelta en una consulta formada con la función useQuery. El primer parámetro de la llamada a la función es una cadena de notas que actúa como una clave para la consulta definida, es decir, la lista de notas.
  //El valor de retorno de la función useQuery es un objeto que indica el estado de la consulta. La salida a la consola ilustra la situación.
  //*---------------------Primera version usando UseQuery directo----------
  // const result = useQuery(
  //   'notes',
  //   () => axios.get('http://localhost:3001/notes').then(res => res.data)
  // )
  //console.log(result)

  //*-----------------Segunda versión creando el archivo requests.js
  //El refetchOn... lo hacemos porque React Query, sus consultas se actualizan con el evento window focus, es decir, cuanbdo cambia el elemento activo de la interfaz de usuario de la aplicación, por ello, en el tercer parámetro en useQuery desactivamos ese comportamiento por Default
  const result = useQuery('notes', getNotes, {
    refetchOnWindowFocus: false
  })

  //Este condicional lo agregamos porque, la primera vez que se procesa el componente, la consulta está con el estado loading/cargando, es decir, la solicitud HTTP asociada está pendiente. En esta etapa, solo se procesa lo siguiente:
  if(result.isLoading){
    return <div>Loading data...</div>
  }

  const notes = result.data

  return(
    <div>
      <h2>Notes app</h2>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      {notes.map(note =>
        <li key={note.id} onClick={() => toggleImportance(note)}>
          {note.content} 
          <strong> {note.important ? 'important' : ''}</strong>
        </li>
      )}
    </div>
  )
}

export default App
