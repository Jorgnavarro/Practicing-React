import './App.css'
import {useCounter} from './hooks/useCounter'
import { useField } from './hooks/useField'



/**
 **Automatizando el manejo del estado del formulario, inputs.
  crear un hook que permita el manejo de los valores de los inputs, información ingresada por los usuarios
  ayuda a economizar líneas de códigos, que suelen ser repetitivas a la hora de manejar este tipo de información, que de ser correcta se almacenará en las BBDD.

  Tratar con formularios se dimplifica enormentment cuando los desagradables detalles esenciales relacionados con la sincronización del estdado del formulario se encapsulan dentro de nuestro Hook personalizado. 
  Claramenten, los hooks personalizados no son solo unsa herramienta para reutilizar, sino que también brindan una mejor manera de dividir nuestro código en partes modulares más pequeñas.
 */




function App() {
  //de esta forma es como llamamos nuestro hook y lo reutilizamos en diferentes variables
  const counter = useCounter()
  const left = useCounter()
  const right = useCounter()
  //**-------------Versión 1-------------
  // const name = useField('text')
  // const born = useField('date')
  // const height = useField('number')
  //**-----------Versión 2--------------
  //todos los datos provenientes del custom hook, se almacena en esas variables, la información retornada se copiar mediante el uso de la propagación {...name} en el componente pasa la información sin desestructurar
  const name = useField('text')
  const born = useField('date')
  const height = useField('number')
  return (
    <div>
      <h1>Examples custom hooks</h1>
      <h2>Counter btns</h2>
      <button>{counter.value}</button>
      <div className='mt-3'>
        <button type='button' className='btn btn-outline-success' onClick={counter.increase}>+</button>
        <button type='button' className='btn btn-outline-warning' onClick={counter.restart}>0</button>
        <button type='button' className='btn btn-outline-danger' onClick={counter.decrease}>-</button>
      </div>
      
      <div className='mt-3'>
        <h2>Counter clicks btns</h2>
        <button>{left.value}</button>
        <button type='button' className='btn btn-outline-success' onClick={left.increase}>Left</button>
        <button type='button' className='btn btn-outline-warning' onClick={right.increase}>Right</button>
        <button>{right.value}</button>
      </div>

      <div className='mt-4'>
      <form className='form'>
      {/*
      **----------------Versión 1------------------------
      */}
      {/* 
      <div className="mb-3">
        <input type={name.type} id='inputEmail' className="form-control form-control-lg"  value={name.value} onChange={name.onChange} />
      </div>
      <div className="mb-3">
        <input type={height.type} id='inputEmail' className="form-control form-control-lg"  value={height.value} onChange={height.onChange} />
      </div>
      <div className="mb-3">
        <input type={born.type} id='inputEmail' className="form-control form-control-lg"  value={born.value} onChange={born.onChange} />
      </div>
        <button type="submit" className="btn btn-danger btn-form mt-3">Login</button> */}
        {/**
         * *------------Versión 2------------------
         * Dado que el objeto name tiene exactamente todos los atributos que el elemento input espera recibir
         * como props, podemos pasar los props al elemento usando la sintaxis de progrpagación (spread syntax) de la siguiente manera: <input {...name}/>
         * 
         * esto sería lo mismo: 
         * 
         * <Greeting firstName='Arto' lastName 'Hellas' />
         * const person = {
         * name: 'Arto',
         * lastName: 'Hellas'
         * }
         * 
         * <Greeting {...person} />
         */}
        <h2 className='header-form'>Form custom hook</h2>
        <div className="mb-3">
        <input className="form-control form-control-lg"  {...name} />
      </div>
      <div className="mb-3">
        <input  className="form-control form-control-lg"  {...born}/>
      </div>
      <div className="mb-3">
        <input className="form-control form-control-lg" {...height} />
      </div>
        <button type="submit" className="btn btn-danger btn-form mt-3">Login</button>
    </form>
      </div>

    </div>
  )
}

export default App
