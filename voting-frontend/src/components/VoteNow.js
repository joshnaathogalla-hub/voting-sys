import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function VoteNow() {

  const navigate = useNavigate();

  const [votedIndex, setVotedIndex] = useState(null);
  const [message, setMessage] = useState("");

  const candidates = [
    { name: "Candidate 1", symbol: "🪷" },
    { name: "Candidate 2", symbol: "✋" },
    { name: "Candidate 3", symbol: "🚲" },
    { name: "Candidate 4", symbol: "🐘" },
    { name: "Candidate 5", symbol: "🌾" },
    { name: "Candidate 6", symbol: "🚗" },
    { name: "Candidate 7", symbol: "🏹" },
    { name: "Candidate 8", symbol: "🕊️" }
  ];

  const handleVote = (index) => {

  const voterId = localStorage.getItem("currentVoterId");

  if (!voterId) {
    alert("Please login again");
    return;
  }

  if (votedIndex !== null) {
    alert("Already voted!");
    return;
  }

  fetch(`http://localhost:8080/api/vote/cast?voterId=${voterId}&candidateId=${index + 1}`, {
    method: "POST"
  })
    .then(res => res.text())
    .then(data => {
      console.log(data); // DEBUG

      alert(data); // show message

      setVotedIndex(index);

      setTimeout(() => {
        navigate("/votedone");
      }, 1500);
    })
    .catch(err => {
      console.error(err);
      alert("Error while voting");
    });
};

  return (
    <div className="vote-container">

      <h2>Cast Your Vote</h2>

      <table className="vote-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Candidate Name</th>
            <th>Symbol</th>
            <th>Vote</th>
          </tr>
        </thead>

        <tbody>
          {candidates.map((c, index) => (
            <tr key={index}>

              <td>{index + 1}</td>

              <td>{c.name}</td>

              <td className="symbol">{c.symbol}</td>

              <td>
                {votedIndex === index ? (
                  <span className="tick">✔</span>
                ) : (
                  <button
                    className="vote-btn"
                    onClick={() => handleVote(index)}
                    disabled={votedIndex !== null}
                  >
                    Vote
                  </button>
                )}
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      {/* Success Message */}
      {message && (
        <p className="success-msg">
          {message}
        </p>
      )}

    </div>
  );
}

export default VoteNow;