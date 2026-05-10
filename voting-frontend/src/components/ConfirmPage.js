import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function ConfirmPage() {
  const navigate = useNavigate();

  const voterId = localStorage.getItem("currentVoterId");
  const details = JSON.parse(localStorage.getItem("userDetails"));

  if (!details) {
    return <h3 style={{ textAlign: "center" }}>No Data Found</h3>;
  }

  return (
    <div className="verify-container">

      <h2 className="logo">✔ VoteNow</h2>

      <div className="card">

        {/* Steps */}
        <div className="steps">
          <div className="step done">✔<br/><span>Verify Voter ID</span></div>
          <div className="line"></div>
          <div className="step done">✔<br/><span>Personal Details</span></div>
          <div className="line"></div>
          <div className="step active">3<br/><span>Confirm & Proceed</span></div>
        </div>

        <h3>Review & Proceed</h3>
        <p>Please confirm your details</p>

        {/* Details Box */}
        <div className="details-box">
          <p><strong>Voter ID:</strong> {voterId}</p>
          <p><strong>Full Name:</strong> {details.name}</p>
          <p><strong>Date of Birth:</strong> {details.dob}</p>
          <p><strong>Mobile Number:</strong> {details.mobile}</p>
          <p><strong>Address:</strong> {details.address}</p>
        </div>

        <button
          className="confirm-btn"
          onClick={() => navigate("/elections")}
        >
          Confirm & Continue to Voting
        </button>
      </div>
    </div>
  );
}

export default ConfirmPage;