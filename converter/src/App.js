import './App.css'
import React, { useState } from 'react';
import CurrencyInput from './components/CurrencyInput';
import CurrencyOutput from './components/CurrencyOutput';

function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleAmountChange = (value) => {
    setAmount(value);
  };

  const handleFromCurrencyChange = (value) => {
    setFromCurrency(value);
  };

  const handleToCurrencyChange = (value) => {
    setToCurrency(value);
  };

  return (
    <div className="container">
      <h1>Конвертер валют</h1>
      <CurrencyInput
        onAmountChange={handleAmountChange}
        onCurrencyChange={handleFromCurrencyChange}
        currency={fromCurrency}
      />
      <CurrencyOutput
        onCurrencyChange={handleToCurrencyChange}
        currency={toCurrency}
        convertedAmount={convertedAmount}
      />
    </div>
  );
}

export default App;