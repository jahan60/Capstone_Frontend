
import "../styles/pages.css";
import { useEffect, useState } from "react";
import axios from "axios";


const Alerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  //useeffect runs once when the page loads because dependcy array is empty
  useEffect(() => {
    const fetchAlerts = async () => { //fetches alerts from the backend
      try {
        //get request
        const res = await axios.get("http://localhost:3000/api/alerts");
        //Save the data we got into our alerts state
        setAlerts(res.data);
      } catch (error) {
        console.error("Error fetching alerts:", error);
      } finally {
        //if error stop the loading state
        setLoading(false);
      }
    };

    fetchAlerts();
  }, []);
    return (
    <div className="alerts-page">
      <h2>Alerts</h2>
       
      {loading && <p>Loading alerts...</p>}  

      {!loading && alerts.length === 0 && (
        <p>No alerts found.</p>
      )}

      <div className="alerts-list">
        {alerts.map(alert => ( //loop through each alerts and diplay it
          <div key={alert._id} className="alert-card">
            <h4>{alert.AlertType.toUpperCase()}</h4>
            <p>{alert.Message}</p>
            <p><strong>Status:</strong> {alert.Status}</p>
            <p><strong>Product:</strong> {alert.ProductId}</p>
            
            <p className="timestamp">{new Date(alert.createdAt).toLocaleString()}</p>
          </div> // convert timestamp into readable timestamp
        ))}
      </div>
    </div>
  );
};

export default Alerts;