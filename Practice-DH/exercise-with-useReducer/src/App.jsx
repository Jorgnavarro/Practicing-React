import Btn from "./components/Btn";
import Display from "./components/Display";
import "./App.css";
//Traemos la configuración que hicimos en el archivo globalContext creando una API de contexto. Esto es un tipo de estado global de la aplicación, con el que se le puede dar acceso directo a cualquier componente de la aplicación
import {CounterContextProvider} from "./context/globalContext";

/*
 * Después de crear el contexto debemos envolver el componente hijo dentro del componente CounterContext.Provider, se deben establecer los valores que serán consumidos por los hijos, el valor adecuado para el contexto
 
 */








function App() {

  
  return (
    //en este caso solamente enviaremos counter y counterDispatch al contexto, para poder consumirlo en otros componentes
    <CounterContextProvider>
    <div>
      <Display/>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <Btn className="btn btn-danger" label="-" type="DEC"/>
        <Btn className="btn btn-warning" label="0" type="ZERO"/>
        <Btn className="btn btn-success" label="+" type="INC"/>
      </div>
    </div>
    </CounterContextProvider>
  );
}

export default App;
