import React, { useState } from "react";
import "../styles.css";

function Elections() {
  const [search, setSearch] = useState("");

  const parties = [
    { name: "Party A", symbol: "🪷" },
    { name: "Party B", symbol: "✋" },
    { name: "Party C", symbol: "🚲" },
    { name: "Party D", symbol: "🐘" }
  ];

  const filteredParties = parties.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="election-container">

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search by party or candidate..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📅 Election Info */}
      <div className="election-box">

  <div className="election-header">
    <h3>Election Date & Time</h3>

    <button 
      className="vote-now-btn"
      onClick={() => window.location.href = "/votenow"}
    >
      <h2>Vote Now</h2>
    </button>
  </div>

  <p>📅 Date: 25 April 2026</p>
  <p>⏰ Time: 9:00 AM - 5:00 PM</p>

</div>

      {/* 🏛 Parties */}
      <h2 className="section-title">Parties</h2>

      <div className="party-grid">
        {filteredParties.map((party, index) => (
          <div key={index} className="party-card">
            <div className="symbol">{party.symbol}</div>
            <p>{party.name}</p>
          </div>
        ))}
      </div>

      {/* ℹ️ Things to Know */}
      <h2 className="section-title">Things to Know</h2>

      <div className="info-grid">
        <div className="info-card">
          ✔ Each voter can vote only once
        </div>

        <div className="info-card">
          ✔ Voting is secure and confidential
        </div>

        <div className="info-card">
          ✔ Do not share your credentials
        </div>
      </div>

    </div>
  );
}

export default Elections;