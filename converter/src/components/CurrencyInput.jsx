import React, { useState } from 'react';

function CurrencyInput({ onAmountChange, onCurrencyChange, currency }) {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (event) => {
    const value = event.target.value;
    const numberValue = Number(value);

    if (value === '' || (numberValue >= 0 && !isNaN(numberValue))) {
      setAmount(value);
      onAmountChange(value);
    }
  };

  const handleCurrencyChange = (event) => {
    onCurrencyChange(event.target.value);
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="amount">Сумма:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Введите сумму"
        />
      </div>
      <div className="form-group">
        <label htmlFor="currency">Валюта:</label>
        <select
          id="currency"
          value={currency}
          onChange={handleCurrencyChange}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="RUB">RUB</option>
        </select>
      </div>
    </div>
  );
}

export default CurrencyInput;