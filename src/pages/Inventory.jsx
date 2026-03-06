import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import EditProductForm from "../components/EditProductForm"; 
import "../styles/pages.css";

function Inventory() {
  // Stores all products from the backend
  const [products, setProducts] = useState([]);

  // Stores the product the user wants to edit
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Controls whether the edit form is visible
  const [edit, setEdit] = useState(false);

  const nav = useNavigate();

  // Loads products when the page first loads
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

  // Deletes a product by its ID
  async function handleDelete(id) {
    if (!window.confirm("Delete this product?")) return;

    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);

      // Removes the deleted product from the UI
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
                  p.quantity <= p.minQuantity //stock status
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
                    setSelectedProduct(p);   // Saves the product to edit
                    setEdit(true);           // Opens the edit form
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

      
      {edit && (     //Shows the edit form when edit is true
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