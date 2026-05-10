import React, { useState } from "react";
import "../styles.css";

function VoteNow() {

  const [message, setMessage] = useState("");

  const handleVote = (candidate) => {
    setMessage(`✅ You voted for ${candidate} successfully!`);
  };

  return (
    <div className="vote-container">

      <h1>Vote Now</h1>

      <p>Select your favorite candidate.</p>

      <div className="candidate-list">

        <div className="candidate-card">
          <h3>Candidate 1</h3>

          <button onClick={() => handleVote("Candidate 1")}>
            Vote
          </button>
        </div>

        <div className="candidate-card">
          <h3>Candidate 2</h3>

          <button onClick={() => handleVote("Candidate 2")}>
            Vote
          </button>
        </div>

      </div>

      {message && (
        <p className="success-message">
          {message}
        </p>
      )}

    </div>
  );
}

export default VoteNow;