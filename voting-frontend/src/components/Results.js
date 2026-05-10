import React, { useState, useEffect } from "react";
import "../styles.css";

function Results() {

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

  // ✅ Backend data
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/vote/results")
      .then(res => res.json())
      .then(data => {
        console.log(data); // debug
        setResults(data);
      })
      .catch(err => console.error(err));
  }, []);

  // ✅ Extract votes from backend
  const votes = results.map(r => r.votes || 0);

  const totalVotes = votes.reduce((a, b) => a + b, 0);

  const maxVotes = votes.length > 0 ? Math.max(...votes) : 0;
  const winnerIndex = votes.indexOf(maxVotes);

  return (
    <div className="results-container">

      <h2>📊 Election Results</h2>

      {/* 🏆 Winner */}
      {votes.length > 0 && (
        <h3 className="winner">
          🏆 Winner: {candidates[winnerIndex]?.name} ({votes[winnerIndex]} votes)
        </h3>
      )}

      <table className="results-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Symbol</th>
            <th>Candidate</th>
            <th>Votes</th>
            <th>Percentage</th>
          </tr>
        </thead>

        <tbody>
          {candidates.map((c, index) => {

            const voteCount = votes[index] || 0;

            const percentage =
              totalVotes === 0
                ? 0
                : ((voteCount / totalVotes) * 100).toFixed(2);

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="symbol">{c.symbol}</td>
                <td>{c.name}</td>
                <td>{voteCount}</td>
                <td>{percentage}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
}

export default Results;