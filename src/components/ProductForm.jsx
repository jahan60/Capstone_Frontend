import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function ProductForm() {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    category: "",
    quantity: "",
    minQuantity: "",
    price: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/products",
        formData
      );

      console.log("Saved:", res.data);
      alert("Product added successfully!");

      nav("/inventory"); 
    } catch (err) {
      console.error(err);
      alert("Error saving product");
    }
  };

  return (
    <div className="page">
      <h1>Add New Product</h1>

      <form className="product-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          name="sku"
          placeholder="SKU"
          value={formData.sku}
          onChange={handleChange}
          required
        />

        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <input
          name="quantity"
          placeholder="Quantity"
          type="number"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <input
          name="minQuantity"
          placeholder="Minimum Quantity"
          type="number"
          value={formData.minQuantity}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          placeholder="Price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <button className="submit-btn" type="submit">
          Save Product
        </button>
      </form>
    </div>
  );
}
