import React from 'react'
import axios from 'axios'
import './App.css'

/**
 * *Componentes de clase

Inicialmente constan de un constructor y del método render()

Con respecto al método render(), es el cuál define cómo y qué se renderiza en la pantalla


*/

class App extends React.Component{
  constructor(props){
    super(props)
    /*
    A diferencia del hook useState, los componentes de clase solo contienen un estado. Por tanto, si el estado
    Se compone de varias partes, deben almacenarse como propiedades del estado. El estado siempre se debe
    inicializar en el constructor.
    -------------------------------------------------------------
    this.state, en este caso el estado de nuestro component de clase App tiene dos propiedades
    las cuales podrán ser invocadas por fuera de la función constructora como: this.state.anecdotes
    this.state.current
    */
    this.state = {
      anecdotes: [],
      current: 0
    }
    //En el constructor se debe especificar el this con las funciones controladoras que se implementarán en los
    //eventos que serán desencadenados por el usuario, al usar un elemento, sea un botón un input.
    this.handleClick = this.handleClick.bind(this)
  }

  /*
  El lugar adecuado dentro de un componente funcional para obtener datos de un servidor es dentro de un effect hook,
  el cual se ejecuta cuando un componente se renderiza, sea una vez o varias veces dependiendo de la configuración.

  Con respecto a los componentes de clases, estos poseen una funcionalidad que tienen todos los componentes y se basa
  en los métodos del ciclo de vida. Para este caso el lugar correcto para desencadenar la obtención de datos 
  de un servidor es dentro del método del ciclo de vida "componentDidMount", que se ejecuta una vez justo después de la primera vez que se renderiza un componente
  */

  componentDidMount = () => {
    /*
    La función callback de la solicitud HTTP actualiza el estado del componente mediante el método setState. 
    El método solo toca las keys que se han definido en el objeto pasado al método como argumento. El valor
    de la key current permanece sin cambios.
    Llamar al método setState siempre desencadena la re-renderización del componente de clase, es decir que 
    realiza nuevamente un llamado al método render
    */
   try{
    axios.get('http://localhost:3001/anecdotes').then(response => {
      this.setState({
        anecdotes: response.data
      })
    })
    .catch(e => {
      console.error("No service available")
      console.log(e.message)
    })

    if(this.state.anecdotes.length === 0){
      throw "No service available"
    }
   }catch(error){
      console.log(error)
   }
   
  }

  //Se define dentro del constructor para luego ser llamado dentro del método render(), como this.handleClick
  handleClick(){
    const current = Math.floor(
      Math.random() * this.state.anecdotes.length
    )
    this.setState({ current })
  }

  render(){
    if(this.state.anecdotes.length === 0){
      return <h4>No anecdotes here...</h4>
    }
      
    return(
      <div>
        <h4>Anecdote of the day</h4>
        <div>
          {this.state.anecdotes[this.state.current].content}
        </div>
        <button onClick={this.handleClick}>Next</button>
      </div>
    )
  }
}

export default App
