import React, { useState } from "react";

export default function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    sku: "",
    category: "",
    quantity: "",
    minQuantity: "",
    price: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product saved:", form);
    alert("Product added!");
  };

  return (
    <div className="page">
      <h1>Add New Product</h1>

      <form className="product-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="sku"
          placeholder="SKU"
          value={form.sku}
          onChange={handleChange}
          required
        />

        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
        />

        <input
          name="quantity"
          placeholder="Quantity"
          type="number"
          value={form.quantity}
          onChange={handleChange}
          required
        />

        <input
          name="minQuantity"
          placeholder="Minimum Quantity"
          type="number"
          value={form.minQuantity}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          placeholder="Price"
          type="number"
          value={form.price}
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