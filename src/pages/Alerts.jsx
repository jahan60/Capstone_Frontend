
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/pages.css";

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    async function loadAlerts() {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:3000/api/alerts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAlerts(res.data);
      } catch (err) {
        console.error("Error loading alerts", err);
      }
    }

    loadAlerts();
  }, []);

  return (
    <div className="page">
      <h1>Alerts</h1>

      {alerts.length === 0 ? (
        <p>No alerts found.</p>
      ) : (
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Alert ID</th>
              <th>Product ID</th>
              <th>Type</th>
              <th>Message</th>
              <th>Status</th>
              <th>Created</th>
            </tr>
          </thead>

          <tbody>
            {alerts.map((a) => (
              <tr key={a._id}>
                <td>{a.Id}</td>
                <td>{a.ProductId}</td>
                <td>{a.AlertType}</td>
                <td>{a.Message}</td>
                <td>{a.Status}</td>
                <td>{new Date(a.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Alerts;