import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles.css";

function VoteNow() {

  const navigate = useNavigate();

  // State for success message
  const [message, setMessage] = useState("");

  // Vote handler
  const handleVote = (candidate) => {
    setMessage(`✅ You voted for ${candidate} successfully!`);
  };

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

      {/* Voting Section */}
      <div className="hero">

        <div className="hero-left">

          <div className="tag-pill">
            🗳 ONLINE VOTING
          </div>

          <h1>
            Cast Your <br />
            <span>Vote Securely</span>
          </h1>

          <p className="desc">
            Select your favorite candidate and submit your vote safely.
          </p>

          {/* Candidate Buttons */}
          <button
            className="primary-btn"
            onClick={() => handleVote("Candidate 1")}
          >
            Vote Candidate 1
          </button>

          <br /><br />

          <button
            className="admin-btn"
            onClick={() => handleVote("Candidate 2")}
          >
            Vote Candidate 2
          </button>

          {/* Success Message */}
          {message && (
            <p style={{ marginTop: "20px", color: "green", fontWeight: "bold" }}>
              {message}
            </p>
          )}

          <br />

          <button
            className="primary-btn"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>

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
          <h4>🔒 Secure Voting</h4>
          <p>Your vote is encrypted and protected.</p>
        </div>

        <div className="feature-card">
          <h4>⚡ Fast Process</h4>
          <p>Vote quickly with a smooth experience.</p>
        </div>

        <div className="feature-card">
          <h4>👥 Trusted Platform</h4>
          <p>Transparent and reliable election system.</p>
        </div>

      </div>

    </div>
  );
}

export default VoteNow;