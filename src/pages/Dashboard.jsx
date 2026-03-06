import React from "react";
import "../styles/pages.css";

function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>

      <div className="dashboard-cards">
        <div className="dashboard-card">📦 Items</div>
        <div className="dashboard-card">⚠️ Alerts</div>
        <div className="dashboard-card">📉 Low Stock</div>
        <div className="dashboard-card">📊 Analytics</div>
      </div>
    </div>
  );
}

export default Dashboard;