import { createContext, useState } from 'react';

const CALCULATOR_CONTEXT = createContext();

const CALCULATOR_PROVIDER = ({ children }) => {
  const [numbers, setNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState('');

  const ADD_NUMBER = (number) => {
    setNumbers([...numbers, number]);
    setCurrentNumber(currentNumber + number);
  };

  const SUM_NUMBERS = () => {
    const SUM = numbers.reduce((acc, current) => acc + parseInt(current), 0);
    return SUM;
  };

  const RESET_CALCULATOR = () => {
    setNumbers([]);
    setCurrentNumber('');
  };

  return (
    <CALCULATOR_CONTEXT.Provider
      value={{
        numbers,
        currentNumber,
        ADD_NUMBER,
        SUM_NUMBERS,
        RESET_CALCULATOR,
      }}
    >
      {children}
    </CALCULATOR_CONTEXT.Provider>
  );
};

export { CALCULATOR_PROVIDER, CALCULATOR_CONTEXT };