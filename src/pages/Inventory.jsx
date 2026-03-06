import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/pages.css";

function Inventory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await axios.get("http://localhost:3000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Error loading products", err);
      }
    }

    loadProducts();
  }, []);

  return (
    <div className="page">
      <h1>Inventory</h1>

      <table className="inventory-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Category</th>
            <th>Qty</th>
            <th>Min Qty</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.sku}</td>
              <td>{p.category}</td>
              <td>{p.quantity}</td>
              <td>{p.minQuantity}</td>
              <td>${p.price}</td>

              <td
                className={
                  p.quantity <= p.minQuantity
                    ? "status low-stock"
                    : "status in-stock"
                }
              >
                {p.quantity <= p.minQuantity ? "Low Stock" : "In Stock"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;