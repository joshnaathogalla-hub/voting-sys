import React from "react";
import "../styles.css";

function About() {
  return (
    <div className="about-container">

      <h1 className="about-title">About VoteNow</h1>
      <p className="about-subtitle">
        A secure and modern digital voting platform
      </p>

      <div className="about-cards">

        {/* Purpose */}
        <div className="about-card">
          <h2>🎯 Purpose of the System</h2>
          <p>
            The Online Voting System aims to provide a secure, fast, and reliable
            way for users to cast their votes digitally. It eliminates the need
            for physical presence and reduces manual errors, ensuring a smooth
            and transparent voting experience.
          </p>
        </div>

        {/* Features */}
        <div className="about-card">
          <h2>⚙️ Key Features</h2>
          <ul>
            <li>✔ User Registration & Login with authentication</li>
            <li>✔ Unique Voter ID verification</li>
            <li>✔ One person can vote only once</li>
            <li>✔ Step-by-step voting process</li>
            <li>✔ Easy and user-friendly interface</li>
          </ul>
        </div>

        {/* Security */}
        <div className="about-card">
          <h2>🔒 Security & Privacy</h2>
          <p>
            The system ensures high-level security using authentication mechanisms.
            User data is protected, and each vote is securely stored. The system
            prevents duplicate voting and maintains complete privacy of user
            information and voting choices.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;