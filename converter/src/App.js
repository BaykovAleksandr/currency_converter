import './App.css'
import React, { useState } from 'react';
import CurrencyInput from './CurrencyInput';
import CurrencyOutput from './CurrencyOutput';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR'); // Добавляем состояние для валюты, в которую конвертируем
  // eslint-disable-next-line no-unused-vars
  const [convertedAmount, setConvertedAmount] = useState(null); // Состояние для результата конвертации

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
    <div>
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