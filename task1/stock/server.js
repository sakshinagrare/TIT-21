const express = require('express');
const app = express();
const port = 3000;

// Routes
const averageRoute = require('./routes/average');
const correlationRoute = require('./routes/correlation');

app.use(express.json()); // For JSON parsing if needed

app.use('/stocks', averageRoute);
app.use('/stockcorrelation', correlationRoute);

// Health check
app.get('/', (req, res) => {
  res.send('Stock Microservice is running!');
});

// Generic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
