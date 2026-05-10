import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles.css";   // ✅ use separate CSS file

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* Navbar */}
      <nav className="navbar">

        <h2 className="logo">✔ VoteNow</h2>

        <div className="nav-links">

          <Link to="/">Home</Link>

          <Link to="/how-it-works">
            How it Works
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>

      </nav>

      {/* Hero Section */}
      <div className="hero">

        <div className="hero-left">

          {/* ✅ BOX STYLE (UPDATED) */}
          <div className="tag-pill">
            ✔ SECURE & TRUSTED
          </div>

          <h1>
            Your Vote. <br />
            <span>Your Power.</span>
          </h1>

          <p className="desc">
            VoteNow makes voting simple, secure, and accessible.
            Your voice shapes the future.
          </p>

          <button
            className="admin-btn"
            onClick={() => navigate("/admin-login")}
          >
            Login as Admin
          </button>

          <button
            className="primary-btn"
            onClick={() => navigate("/login")}
          >
            Login to Vote →
          </button>

          <p>
            "Democracy evolves with technology-Online voting is its next step forward"
          </p>

        </div>

        <div className="hero-right">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="vote"
          />

        </div>

      </div>

      {/* Features */}
      <div className="features">

        <div className="feature-card">
          <h4>🔒 Secure</h4>
          <p>Your data is protected with encryption.</p>
        </div>

        <div className="feature-card">
          <h4>⚡ Easy to Use</h4>
          <p>Simple steps to cast your vote.</p>
        </div>

        <div className="feature-card">
          <h4>👥 Trusted</h4>
          <p>Transparent and reliable voting system.</p>
        </div>

      </div>

    </div>
  );
}

export default Home;