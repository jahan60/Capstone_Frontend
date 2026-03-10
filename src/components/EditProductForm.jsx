import { useState, useEffect } from "react";
import api from "../api.js";

export default function EditProductForm({ product, setEdit, setProducts }) {
  if (!product) return <p>Loading...</p>;

  const [formData, setFormData] = useState({
    name: product.name || "",
    sku: product.sku || "",
    category: product.category || "",
    quantity: product.quantity || "",
    minQuantity: product.minQuantity || "",
    price: product.price || "",
  });

  useEffect(() => {
    setFormData({
      name: product.name || "",
      sku: product.sku || "",
      category: product.category || "",
      quantity: product.quantity || "",
      minQuantity: product.minQuantity || "",
      price: product.price || "",
    });
  }, [product]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("FORM SUBMITTED!");
    console.log("PRODUCT ID:", product._id);

    try {
      const payload = {
        ...formData,
        quantity: Number(formData.quantity),
        minQuantity: Number(formData.minQuantity),
        price: Number(formData.price),
      };

      console.log("PAYLOAD:", payload);

      
      const res = await api.put(`/products/${product._id}`, payload);

      console.log("Update response:", res.data);

      const updated = res.data.product || res.data;

      setProducts((prev) =>
        prev.map((p) => (p._id === updated._id ? updated : p))
      );

      setEdit(false);
    } catch (err) {
      console.error("Error updating product:", err.response || err);
      alert("Error updating product");
    }
  }

  return (
    <fieldset className="product-edit-box">
      
       <div className="edit-form-header">
      <h2>Edit Product</h2>
    </div>



      <form onSubmit={handleSubmit} className="Product-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </label>

        <label>
          SKU:
          <input
            type="text"
            name="sku"
            onChange={handleChange}
            value={formData.sku}
            required
          />
        </label>

        <label>
          Category:
          <input
            type="text"
            name="category"
            onChange={handleChange}
            value={formData.category}
            required
          />
        </label>

        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            onChange={handleChange}
            value={formData.quantity}
            required
          />
        </label>

        <label>
          Minimum Quantity:
          <input
            type="number"
            name="minQuantity"
            onChange={handleChange}
            value={formData.minQuantity}
            required
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            onChange={handleChange}
            value={formData.price}
            required
          />
        </label>

        <input type="submit" value="Save Changes" className="submit-btn" />
      </form>
    </fieldset>
  );
}