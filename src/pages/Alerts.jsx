import React from "react";
import "../styles/pages.css";

function Alerts() {
  return (
    <div className="page">
      <h1>Alerts</h1>

      <ul className="alerts-list">
        <li className="alert-item warning">⚠️ Low stock on Item A</li>
        <li className="alert-item critical">🔴 Critical: Item B out of stock</li>
        <li className="alert-item info">ℹ️ New shipment arriving tomorrow</li>
      </ul>
    </div>
  );
}

export default Alerts;