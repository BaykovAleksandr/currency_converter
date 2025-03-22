import React from 'react';

function CurrencyOutput({ onCurrencyChange, currency, convertedAmount }) {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="output-currency">Конвертировать в:</label>
        <select
          id="output-currency"
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="RUB">RUB</option>
        </select>
      </div>
      <div className="result">
        <strong>Результат:</strong> {convertedAmount !== null ? convertedAmount : '—'}
      </div>
    </div>
  );
}

export default CurrencyOutput;
