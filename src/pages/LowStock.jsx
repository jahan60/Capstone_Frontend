import { useEffect, useState } from "react";
import api from "../api.js";   
import "../styles/pages.css";

function LowStock() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLowStock() {
      try {
        // token is automatically added
        const res = await api.get("/products");

        const low = res.data.filter(
          (p) => Number(p.quantity) <= Number(p.minQuantity)
        );

        setItems(low);

      } catch (err) {
        console.error("Error loading low stock items", err);

      } finally {
        setLoading(false);
      }
    }

    loadLowStock();
  }, []);

  return (
    <div className="page">
      <h1>Low Stock Items</h1>

      {loading && <p>Loading...</p>}

      {!loading && items.length === 0 && (
        <p>No low stock items found.</p>
      )}

      {items.length > 0 && (
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
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.sku}</td>
                <td>{item.quantity}</td>
                <td>{item.minQuantity}</td>
                <td className="status low-stock">Low Stock</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LowStock;