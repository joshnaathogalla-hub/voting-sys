import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function AdminLogin() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {

    // ✅ correct credentials
    if (username === "elections" && password === "electionspwd") {

      // 🔐 store admin login
      localStorage.setItem("isAdmin", "true");

      // ✅ redirect to results page
      navigate("/results");

    } else {
      // ❌ wrong credentials
      setError("❌ Invalid credentials! Try as User.");
    }
  };

  return (
    <div className="admin-container">

      <div className="admin-card">
        <h2>Admin Login</h2>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        {/* ❌ Error Message */}
        {error && <p className="error-msg">{error}</p>}
      </div>

    </div>
  );
}

export default AdminLogin;