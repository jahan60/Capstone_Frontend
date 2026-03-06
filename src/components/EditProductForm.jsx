import { useEffect, useState  } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EditProductForm ({ product, setEdit, setProducts }) {
  if(!product) return <p>Loading...</p>;
    //prefilled form with the existing data 
    const [formData, setFormData ]= useState({
    name: product.name || "",
    sku: product.sku || "",
    category: product.category || "",
    quantity: product.quantity || "",
    minQuantity: product.minQuantity || "",
    price: product.price || "",


  });


//Handle input changes
function handleChange(e){
    setFormData({ ...formData, [e.target.name]: e.target.value });

}

//submit the updated product
async function handleSubmit(e){
    e.preventDefault();
    try{
       //send put request
       let res=await axios.put(
        `http://localhost:3000/api/products/${product._id}`,
        formData
      );

  //update the product list
  setProducts((prev) =>
        prev.map((p) =>
          p._id === res.data.product._id ? res.data.product : p
        )
      );

//close the form
setEdit(false)
        
    }catch(err){
        console.error(err.message);
        alert("Error updating product")
    }
}
return(
    <fieldset className="product-edit-box">
        <legend>Edit Product</legend>

        <form onSubmit = {handleSubmit} className ="Product-form">
            <label>
                Name:
                <input 
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                required />
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

      <input type ="submit" value = "Save Changes" className = "submit-btn" />
         </form>
    </fieldset>

);

}