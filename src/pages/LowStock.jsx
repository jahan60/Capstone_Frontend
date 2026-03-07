import  { useEffect, useState } from "react";
import axios from "axios";
import "../styles/pages.css";

function LowStock() {
  // items = list of low‑stock products we will display
  // setItems = function to update that list
  const [items, setItems] = useState([]);

  // loading = true means "we are still fetching data"
  const [loading, setLoading] = useState(true);

  // useEffect runs ONE time when the page first loads
  useEffect(() => {
    // This function gets all products from the backend
    async function loadLowStock() {
      try {
        // Make a GET request to our backend API
        const res = await axios.get("http://localhost:3000/api/products");

        // Filter only products where quantity is less than or equal to minQuantity
        const low = res.data.filter(p => p.quantity <= p.minQuantity);

        // Save the filtered list into our state
        setItems(low);

      } catch (err) {
        // If something goes wrong, show the error in the console
        console.error("Error loading low stock items", err);

      } finally {
        // No matter what happens, stop the loading state
        setLoading(false);
      }
    }

    // Call the function to actually fetch the data
    loadLowStock();

  }, []); // Empty array = run only once when the component loads


  return (
    <div className="page">
      <h1>Low Stock Items</h1>

      {/* Show this while data is still loading */}
      {loading && <p>Loading...</p>}

      {/* If loading is done AND no low‑stock items exist */}
      {!loading && items.length === 0 && (
        <p>No low stock items found.</p>
      )}

      {/* If we have low‑stock items, show them in a table */}
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
            {items.map(item => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.sku}</td>
                <td>{item.quantity}</td>
                <td>{item.minQuantity}</td>

                {/* Always low stock on this page */}
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