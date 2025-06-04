import axios from "axios";

const API_BASE = "http://localhost:5000"; // your backend API base URL

export const fetchStockPrices = async (symbol, minutes) => {
  const res = await axios.get(`${API_BASE}/stock-prices`, {
    params: { symbol, minutes },
  });
  return res.data;
};

export const fetchCorrelation = async (minutes) => {
  const res = await axios.get(`${API_BASE}/correlation`, {
    params: { minutes },
  });
  return res.data;
};
