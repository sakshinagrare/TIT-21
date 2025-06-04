const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Dummy price generator
function generateDummyPrices(minutes) {
  const prices = [];
  const now = new Date();
  for (let i = minutes - 1; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60000);
    prices.push({
      time: time.toISOString().slice(11, 16), // HH:mm
      price: parseFloat((Math.random() * 10 + 150).toFixed(2)),
    });
  }
  return prices;
}

// ✅ MAIN ENDPOINT
app.get('/api/stocks/:symbol', (req, res) => {
  const { symbol } = req.params;
  const minutes = parseInt(req.query.minutes) || 15;

  console.log(`API called for ${symbol} with minutes = ${minutes}`);

  // Dummy data generation (replace with DB/API later)
  const data = generateDummyPrices(minutes);
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
