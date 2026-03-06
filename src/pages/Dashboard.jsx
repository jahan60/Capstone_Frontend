import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Dashboard</h1>

      <div className="dashboard-cards">

        <div 
          className="dashboard-card"
          onClick={() => navigate("/inventory")}
        >
          📦 Items
        </div>

        <div 
          className="dashboard-card"
          onClick={() => navigate("/alerts")}
        >
          ⚠️ Alerts
        </div>

        <div 
          className="dashboard-card"
          onClick={() => navigate("/low-stock")}
        >
          📉 Low Stock
        </div>

        <div 
          className="dashboard-card"
          onClick={() => navigate("/analytics")}
        >
          📊 Analytics
        </div>

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