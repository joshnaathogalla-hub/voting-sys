import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

  const user = { email, password };

  const res = await fetch("http://localhost:8080/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  const data = await res.json();

  if (data && data.voterId) {
    localStorage.setItem("currentVoterId", data.voterId);
    navigate("/verify");
  } else {
    alert("Invalid login");
  }
};

  return (
    <div className="login-bg">
      <div className="overlay">

        {/* Logo */}
        

        {/* Card */}
        <div className="login-card">
          <h2>Welcome Back!</h2>
          <p className="subtitle">Login to continue e-voting</p>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <div className="password-field">
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            
          </div>

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>

          
        </div>
      </div>
    </div>
  );
}

export default Login;