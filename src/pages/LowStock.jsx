import React from "react";
import "../styles/pages.css";

function LowStock() {
  return (
    <div className="page">
      <h1>Low Stock Items</h1>

      <table className="inventory-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Qty</th>
            <th>Min Qty</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Example Product 2</td>
            <td>SKU999</td>
            <td>2</td>
            <td>5</td>
            <td className="status low-stock">Low Stock</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LowStock;