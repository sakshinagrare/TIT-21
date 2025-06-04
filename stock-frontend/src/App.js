import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StockPage from "./pages/StockPage";
import CorrelationHeatmapPage from "./pages/CorrelationHeatmapPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StockPage />} />
        <Route path="/correlation" element={<CorrelationHeatmapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
