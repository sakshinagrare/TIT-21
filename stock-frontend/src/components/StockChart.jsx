import React from "react";
import { Line } from "react-chartjs-2";
import { Card, CardContent, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const StockChart = ({ data, average }) => {
  if (!data?.length) return <Typography>No data to display.</Typography>;

  const labels = data.map((point) => point.time);
  const prices = data.map((point) => point.price);

  const avgLine = new Array(data.length).fill(average);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Price",
        data: prices,
        borderColor: "blue",
        backgroundColor: "lightblue",
        tension: 0.3,
      },
      {
        label: "Average",
        data: avgLine,
        borderColor: "red",
        borderDash: [10, 5],
        pointRadius: 0,
      },
    ],
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Stock Prices
        </Typography>
        <Line data={chartData} />
      </CardContent>
    </Card>
  );
};

export default StockChart;
