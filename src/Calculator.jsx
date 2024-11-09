import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CALCULATOR_CONTEXT } from './CalculatorProvider';


const CALCULATOR = () => {
  const { ADD_NUMBER, currentNumber } = useContext(CALCULATOR_CONTEXT);

  const HANDLE_CLICK = (number) => {
    ADD_NUMBER(number);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <p>Current Number: {currentNumber}</p>
      <div>
        <button onClick={() => HANDLE_CLICK('0')}>0</button>
        <button onClick={() => HANDLE_CLICK('1')}>1</button>
        <button onClick={() => HANDLE_CLICK('2')}>2</button>
        <button onClick={() => HANDLE_CLICK('3')}>3</button>
        <button onClick={() => HANDLE_CLICK('4')}>4</button>
        <button onClick={() => HANDLE_CLICK('5')}>5</button>
        <button onClick={() => HANDLE_CLICK('6')}>6</button>
        <button onClick={() => HANDLE_CLICK('7')}>7</button>
        <button onClick={() => HANDLE_CLICK('8')}>8</button>
        <button onClick={() => HANDLE_CLICK('9')}>9</button>
      </div>
      <Link to="/result">See result</Link>
    </div>
  );
};

export default CALCULATOR;