import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Dashboard</h1>

      <div className="dashboard-cards">
        <div className="dashboard-card">📦 Items</div>
        <div className="dashboard-card">⚠️ Alerts</div>
        <div className="dashboard-card">📉 Low Stock</div>
        <div className="dashboard-card">📊 Analytics</div>
      </div>

      <button
        className="add-item-btn"
        onClick={() => navigate("/products/add")}
      >
        Add Item
      </button>
    </div>
  );
}

export default Dashboard;