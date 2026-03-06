import React from "react";
import "../styles/pages.css";

function Inventory() {
  return (
    <div className="page">
      <h1>Inventory</h1>

      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Stock</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Example Item</td>
            <td>10</td>
            <td>In Stock</td>
          </tr>

          <tr>
            <td>Example Item 2</td>
            <td>3</td>
            <td>Low Stock</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;