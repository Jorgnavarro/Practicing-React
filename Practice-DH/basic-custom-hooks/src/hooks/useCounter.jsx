import { useState } from "react";

/*
Acá extraemos la lógica que habíamos creado del contador en la aplicación principal.
Tenemos el estado y las funciones auxiliares.

Al estar siendo consumido de forma directa en la aplicación solamente podía ser usado una sola vez, pero
creando un hook personalizado, es decir un custom hook, se puede consumir de distintas formas

Tenemos 3 variables que consumen este useCounter en la app.
1.counter
2.left
3.right

*/

export const useCounter = () => {
  const [value, setValue] = useState(0);

  const increase = () => setValue(value + 1);

  const restart = () => setValue(0);

  const decrease = () => setValue(value - 1);

  return{
    value,
    increase,
    restart,
    decrease
  }
};


