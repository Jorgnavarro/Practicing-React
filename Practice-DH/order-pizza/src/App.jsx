import { useState, useEffect } from 'react'
import './App.css'
import { Color } from './components/Color';
import { Order } from './components/Order';

const colors = [
    'Red',
    'Blue',
    'Yellow',
    'Green',
    'Orange',
    'Magenta',
    'Brown', 
    'Lime',
]

function App() {
  const [order, setOrder] = useState (null);
  const [hide, setHide] = useState(false);
  const [color, setColor] = useState(colors[0]);

  useEffect(()=>{
      setTimeout(() => {
          setOrder("Pizzas")
          console.log("El componente fue actualizado");
      }, 2000);
  },[])

  function handleClick(){
    console.log("El componente fue desmontado");
    setOrder(null);
  }

  function changeElement(){
      setHide(!hide);
  }

  const suffle = () =>{
      setColor(colors[Math.floor(Math.random() * colors.length)])
      console.log("hola");
  }


  return (
    <>
      <div>
      <button onClick={changeElement}>
        {hide?"Show elements": "Hide elements"}
      </button>
        <div>
          {hide?undefined: (
            <>
          <Order order={order} handleClick={handleClick}/>
            <hr/>
          <Color selectedColor={color} suffle={suffle}/>
          </>
          )}
        </div>
      </div>
        
    </>
  )
}

export default App
