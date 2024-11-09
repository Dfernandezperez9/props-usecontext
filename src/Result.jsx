import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CALCULATOR_CONTEXT } from './CalculatorProvider';

const RESULT = () => {
  const { numbers, SUM_NUMBERS, RESET_CALCULATOR } = useContext(CALCULATOR_CONTEXT);

  return (
    <div>
      <h1>Result</h1>
      <p>Sum: {SUM_NUMBERS()}</p>
      <p>Numbers: {numbers.join(', ')}</p>
      <button onClick={RESET_CALCULATOR}>Reset</button>
      <Link to="/">Back</Link>
    </div>
  );
};

export default RESULT;