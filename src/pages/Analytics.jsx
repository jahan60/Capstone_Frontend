import React, { useState, useEffect } from "react";
import "../styles/pages.css";

function Analytics() {
  const [products, setProducts] = useState([]);
  const [selectedSku, setSelectedSku] = useState("");
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  // Load products on page load
  useEffect(() => {
    async function loadProducts() {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:3000/api/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error loading products:", err);
      }
    }

    loadProducts();
  }, []);

  // Call AI prediction
  const handlePredict = async () => {
    if (!selectedSku) return;

    setLoading(true);
    setPrediction("");

    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:3000/api/ai/predict-stock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId: selectedSku }),
      });

      const data = await res.json();
      setPrediction(data.prediction);
    } catch (err) {
      console.error("Prediction error:", err);
    }

    setLoading(false);
  };

  return (
    <div className="page">
      <h1>Analytics</h1>

      <div className="analytics-card">
        <h2>AI Stock Prediction</h2>

        <select
          className="select-input"
          value={selectedSku}
          onChange={(e) => setSelectedSku(e.target.value)}
        >
          <option value="">Select a product</option>
          {products.map((p) => (
            <option key={p.sku} value={p.sku}>
              {p.name} ({p.sku})
            </option>
          ))}
        </select>

        <button className="predict-btn" onClick={handlePredict}>
          {loading ? "Analyzing..." : "Predict Stock"}
        </button>

        {prediction && (
          <div className="prediction-box">
            <h3>AI Prediction</h3>
            <p>{prediction}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Analytics;