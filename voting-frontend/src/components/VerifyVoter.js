import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function VerifyVoter() {
  const [voterId, setVoterId] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    // ✅ Check length
    if (voterId.length !== 10) {
      alert("Voter ID must be exactly 10 characters");
      return;
    }

    // ✅ Get used voter IDs from localStorage
    const usedIds = JSON.parse(localStorage.getItem("usedVoterIds")) || [];

    // ✅ Check duplicate
    if (usedIds.includes(voterId)) {
      alert("This Voter ID has already been used!");
      return; // ❌ STOP
    }

    // ✅ Save current voter ID
    localStorage.setItem("currentVoterId", voterId);

    // ✅ Go to next page
    navigate("/details");
  };

  return (
    <div className="verify-container">

      {/* Logo */}
      <h2 className="logo">✔ VoteNow</h2>

      {/* Card */}
      <div className="card">

        {/* Steps */}
        <div className="steps">
          <div className="step active">
            1
            <br />
            <span>Verify Voter ID</span>
          </div>

          <div className="line"></div>

          <div className="step">
            2
            <br />
            <span>Personal Details</span>
          </div>

          <div className="line"></div>

          <div className="step">
            3
            <br />
            <span>Confirm & Proceed</span>
          </div>
        </div>

        {/* Content */}
        <h3>Verify Your Voter ID</h3>
        <p>Enter your Voter ID to get started</p>

        {/* Input */}
        <input
          type="text"
          placeholder="Enter 10-character Voter ID"
          value={voterId}
          onChange={(e) => setVoterId(e.target.value)}
        />

        {/* Button */}
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default VerifyVoter;