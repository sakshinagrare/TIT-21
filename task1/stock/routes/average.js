// routes/average.js
const express = require('express');
const router = express.Router();
const { getStockPrice } = require('../services/stockService');

router.get('/:ticker', async (req, res) => {
  const { ticker } = req.params;
  const { minutes, aggregation } = req.query;

  if (!minutes || !aggregation) {
    return res.status(400).json({ error: 'Query ?minutes=X&aggregation=average is required' });
  }

  const data = await getStockPrice(ticker, minutes, aggregation);
  res.json(data);
});

module.exports = router;
