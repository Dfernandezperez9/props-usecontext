import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './Calculator';
import Result from './Result';
import { CALCULATOR_PROVIDER } from './CalculatorProvider';

const App = () => {
  return (
    <CALCULATOR_PROVIDER>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </CALCULATOR_PROVIDER>
  );
};

export default App;
