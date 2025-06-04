import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import TimeSelector from "../components/TimeSelector";
import StockChart from "../components/StockChart";
import { fetchStockPrices } from "../services/api";

const StockPage = () => {
  const [timeInterval, setTimeInterval] = useState(15);
  const [stockData, setStockData] = useState([]);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const symbol = "AAPL"; // example symbol, could be dynamic
        const data = await fetchStockPrices(symbol, timeInterval);

        setStockData(data.prices);
        setAverage(data.average);
      } catch (error) {
        console.error("Error loading stock prices", error);
      }
    };

    loadData();
  }, [timeInterval]);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Stock Price Chart
        </Typography>
        <TimeSelector
          value={timeInterval}
          onChange={(e) => setTimeInterval(e.target.value)}
        />
        <Box mt={2}>
          <StockChart data={stockData} average={average} />
        </Box>
      </Box>
    </Container>
  );
};

export default StockPage;
