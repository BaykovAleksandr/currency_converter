import './App.css'
import React, { useState } from 'react';
import CurrencyInput from './components/CurrencyInput';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');

  const handleAmountChange = (value) => {
    setAmount(value);
  };

  const handleCurrencyChange = (value) => {
    setFromCurrency(value);
  };

  return (
    <div>
      <h1>Конвертер валют</h1>
      <CurrencyInput
        onAmountChange={handleAmountChange}
        onCurrencyChange={handleCurrencyChange}
        currency={fromCurrency}
      />
    </div>
  );
}

export default App;