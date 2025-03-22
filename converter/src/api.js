import axios from 'axios';

const API_KEY = '21079fc03c0b4928f8b08f66'; 
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

export const fetchExchangeRates = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.conversion_rates;
  } catch (error) {
    console.error('Ошибка при получении курсов валют:', error);
    return null;
  }
};