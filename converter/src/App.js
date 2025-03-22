import './App.css'
import React, { useState, useEffect } from 'react';
import CurrencyInput from './components/CurrencyInput';
import CurrencyOutput from './components/CurrencyOutput';
import { fetchExchangeRates } from './api';
import './App.css';

function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRates, setExchangeRates] = useState(null);

  // Загрузка курсов валют при монтировании компонента
  useEffect(() => {
    const loadExchangeRates = async () => {
      const rates = await fetchExchangeRates();
      setExchangeRates(rates);
    };

    loadExchangeRates();
  }, []);

  // Функция для конвертации валют
  const convertCurrency = () => {
    if (exchangeRates && amount) {
      const fromRate = exchangeRates[fromCurrency];
      const toRate = exchangeRates[toCurrency];
      const result = (amount * toRate) / fromRate;
      setConvertedAmount(result.toFixed(2)); // Округляем до 2 знаков после запятой
    }
  };

  // Вызываем конвертацию при изменении amount, fromCurrency или toCurrency
  useEffect(() => {
    convertCurrency();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

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