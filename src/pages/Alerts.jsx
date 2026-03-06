import React, { useState } from "react";
import "../styles/pages.css";

function Alerts() {
  const [alerts, setAlerts] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateAlerts = async () => {
    setLoading(true);
    setAlerts("");

    try {
      const res = await fetch("http://localhost:3000/api/ai/generate-alerts", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });

      const data = await res.json();
      setAlerts(data.alerts);
    } catch (err) {
      console.error("Error generating alerts:", err);
    }

    setLoading(false);
  };

  return (
    <div className="page">
      <h1>Alerts</h1>

      <button className="predict-btn" onClick={handleGenerateAlerts}>
        {loading ? "Analyzing..." : "Generate AI Alerts"}
      </button>

      {alerts && (
        <div className="alert-box">
          <h3>AI Alerts</h3>
          <pre className="alert-text">{alerts}</pre>
        </div>
      )}
    </div>
  );
}

export default Alerts;