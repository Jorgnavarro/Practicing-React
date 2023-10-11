import { useState, useCallback, memo } from 'react'
import './App.css'
import { SimpleElements } from './components/SimpleElements';


/* The following function, declared outside the App() component, uses "memo" to store the value of the function that is triggered when the event is executed, inside the component*/

const Button = memo(({handleClick, name}) =>{
  console.log(`${name} rendered`);
  return <button onClick={handleClick}>{name}</button>
});

/*The memo function returns a component, with the event that will be triggered within the main component. In this case it is a button*/

function App() {
  console.log('counter rendered');
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  /*Here useCallback, It stores the functions that update the states of the component; additionally, the dependency that will be updated each time the event is triggered must be passed.  */
  const memoizedSetCountOne = useCallback(()=>{
      setCountOne(countOne + 1);
  },[countOne]);
  const memoizedSetCountTwo = useCallback(()=>{
    setCountTwo(countTwo + 1);
},[countTwo]);

/*In our return, we call the Button element that we have created outside the app component, and we pass it the necessary parameters to make it functional. */

  return (
    <>
    <div>
      {countOne} 
      <Button handleClick={memoizedSetCountOne} name="button1"/>
    </div>
    <div>
    {countTwo}
      <Button handleClick={memoizedSetCountTwo} name="button2"/>
    </div>
    <SimpleElements/>
    </>
  )
}

export default App
