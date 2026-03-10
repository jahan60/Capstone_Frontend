import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();    // Navigation allows users to different routes. lets say after login to dashboard
  
  //states object for from inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //state variable to store login error
  const [error, setError] = useState("");
 
  //Handle inpit change
  const handleChange = (e) => {
    setFormData({
      ...formData,  //keep existing values while updating only the changed field.
      [e.target.name]: e.target.value
    });
  };
  //Handle form submission 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Send a post request to the backend login api. 
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email: formData.email,
        password: formData.password
      });

      // Save token
      localStorage.setItem("token", res.data.token); //stores the JWT authentication token in the browser's locatstorage so the users stays logged in


      // Update navbar state
      setIsLoggedIn(true);

      // Redirect to dashboard (ex. dashboard)
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      {error && <p className="error">{error}</p>}

      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="auth-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;