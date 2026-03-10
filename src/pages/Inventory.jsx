import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EditProductForm from "../components/EditProductForm";
import "../styles/pages.css";

function Inventory() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [edit, setEdit] = useState(false);

  const nav = useNavigate();

  // Load products on page load
  useEffect(() => {
    async function loadProducts() {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:3000/api/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProducts(res.data);
      } catch (err) {
        console.error("Error loading products", err);
      }
    }

    loadProducts();
  }, []);

  // Delete product
  async function handleDelete(id) {
    if (!window.confirm("Delete this product?")) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:3000/api/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting product");
    }
  }

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
            <th>Action</th>
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

              <td>
                <button
                  className="edit-btn"
                  onClick={() => {
                    setSelectedProduct(p);
                    setEdit(true);
                  }}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(p._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

       {edit && (
        <EditProductForm
          product={selectedProduct}
          setEdit={setEdit}
          setProducts={setProducts}
        />
      )}
    </div>
  );
}
 

export default Inventory;
