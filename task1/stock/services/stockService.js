// services/stockService.js
const axios = require('axios');
const { getToken } = require('./tokenService');

const BASE_URL = 'http://20.244.56.144/evaluation-service';

async function getStockPrice(ticker, minutes, aggregation) {
  try {
    const token = await getToken();

    const response = await axios.get(`${BASE_URL}/stocks/${ticker}`, {
      params: { minutes, aggregation },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching stock price:', error.response?.data || error.message);
    return { error: 'Unable to fetch stock data' };
  }
}

module.exports = { getStockPrice };
