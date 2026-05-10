import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function PersonalDetails() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    dob: "",
    mobile: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const voterId = localStorage.getItem("currentVoterId");

    // ❌ If user directly opens this page
    if (!voterId) {
      alert("Invalid access! Please verify voter ID first.");
      navigate("/verify");
      return;
    }

    // ❌ Basic validation
    if (form.mobile.length !== 10) {
      alert("Mobile number must be 10 digits");
      return;
    }

    // ✅ Save user details
    localStorage.setItem("userDetails", JSON.stringify(form));

    // ✅ Save used voter ID (to prevent reuse)
    const usedIds = JSON.parse(localStorage.getItem("usedVoterIds")) || [];
    if (!usedIds.includes(voterId)) {
      usedIds.push(voterId);
      localStorage.setItem("usedVoterIds", JSON.stringify(usedIds));
    }

    // ✅ Redirect to confirm page
    navigate("/confirm");
  };

  return (
    <div className="verify-container">

      {/* Logo */}
      <h2 className="logo">✔ VoteNow</h2>

      {/* Card */}
      <div className="card">

        {/* Steps */}
        <div className="steps">
          <div className="step done">
            ✔
            <br />
            <span>Verify Voter ID</span>
          </div>

          <div className="line"></div>

          <div className="step active">
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

        {/* Heading */}
        <h3>Enter Your Details</h3>
        <p>Please provide your information to continue</p>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="mobile"
            placeholder="Enter 10-digit mobile number"
            value={form.mobile}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Enter your complete address"
            value={form.address}
            onChange={handleChange}
            required
          />

          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
}

export default PersonalDetails;