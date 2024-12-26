import React, { useState } from "react";
import axios from "axios";
import './Login.css';

const Login = () => {
  // State to store form input data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State to store messages (success or error)
  const [message, setMessage] = useState("");
  const [passwordError, setPasswordError] = useState(""); // For password validation errors

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate password strength
  const validatePassword = (password) => {
    const minLength = 8;
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

    if (password.length < minLength) {
      return "Password must be at least 8 characters long.";
    }
    if (!strongPasswordRegex.test(password)) {
      return "Password must include uppercase, lowercase, number, and special character.";
    }
    return "";
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password
    const passwordValidationMessage = validatePassword(formData.password);
    if (passwordValidationMessage) {
      setPasswordError(passwordValidationMessage);
      return;
    }
    setPasswordError(""); // Clear error if validation passes

    try {
      // Sending POST request to the backend to sign up the user
      const response = await axios.post("http://localhost:5000/api/Login", formData);

      // Display success message
      setMessage(response.data.message);
      alert(" successful!");
      window.location.href = "/Home";
    } catch (error) {
      // Handle any errors (e.g., user already exists, server error)
      setMessage(error.response ? error.response.data.message : "An error occurred");
    }
  };

  return (
    <div className="Login-container">
      <h2>Login</h2>

      {/* Display message (success or error) */}
      {message && <p>{message}</p>}
      {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

      {/* Signup Form */}
      <form onSubmit={handleSubmit}>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
