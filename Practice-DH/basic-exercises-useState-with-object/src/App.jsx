import './App.css';
import { Header } from './components/Header';
import { useState } from 'react';
import { Button } from './components/Button';
import { PedidosMultiples } from './components/PedidosMultiples';

function App() {
  const food = ["Hamburguer", "Pizza", "Hot dog", "French fries", "Soda", "Water"]
  const [counter, setCounter] = useState(0);
  const [pedido, setPedido] = useState()
  const increaseByOne = () => setCounter(counter +1);
  const decreaseByOne = () => setCounter(counter -1);
  const setToZero = () => setCounter(0);
  
  const selectFood = (e) =>{
      console.log(e.target);
  }
  const addFood = (e) =>{
    setPedido(e);
  }
//Para actualizar el estado del array, lo que hacemos es devolver un listado con los elementos restantes en el array, es decir, sacando al elemento encontrado
//de esa forma logramos renderizar una lista sin el elemento escogido.




  // const test =(element) =>{
  //   setMenu(
  //     menu.filter((f, index) =>{
  //       return menu[index] !== element
  //     })
  //   )
  // }
  //comparamos el array original con el que ha sido actualizado y con ello renderizamos el elemento faltante en la lista
  // let newList = food.filter(e =>{
  //   return !menu.includes(e)
  // })
  

  return (
    <div className="App">
          <Header counter={counter}/>
          <div className='container container-btns'>
            <Button type="button" className="btn btn-outline-success" text='Plus' handleClick={increaseByOne}/>
            <Button type="button" className="btn btn-outline-danger" text='Reset' handleClick={setToZero}/>  
            <Button type="button" className="btn btn-outline-light" text='Minus' handleClick={decreaseByOne}/>
          </div>
          <div className='container'>
            <Button type="button" className="btn btn-outline-success"  text="Hacer pedido" handleClick={selectFood}/>
          </div>
          <div className='container container-btns'>
              {food.map(food =>{
                  return <button type="button" className="btn btn-outline-success" key={food} onClick={ ()=> addFood(food)}>{food}</button>
              })}
          </div>
              <h3 className='body-text'>El pedido realizado fue: {pedido} </h3>
              <PedidosMultiples/>
    </div>
  );
}

export default App;
