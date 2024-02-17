import { useState } from "react";

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


