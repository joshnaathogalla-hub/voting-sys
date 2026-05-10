import React from "react";
import "../styles.css";

function HowItWorks() {
  return (
    <div className="how-container">

      <h1 className="title">How the Voting System Works</h1>
      <p className="subtitle">
        A secure and simple process to ensure fair digital voting
      </p>

      <div className="timeline">

        {/* Step 1 */}
        <div className="step">
          <div className="circle">1</div>
          <div className="content">
            <h3>User Registration / Login</h3>
            <p>
              New users must register using their email and password.
              Existing users can log in securely using their credentials.
              Authentication ensures only valid users can access the system.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="step">
          <div className="circle">2</div>
          <div className="content">
            <h3>Voter ID Verification</h3>
            <p>
              Users must enter a unique 10-character Voter ID.
              The system checks whether the ID is valid and not used before.
              Duplicate or invalid IDs are blocked to prevent multiple voting.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="step">
          <div className="circle">3</div>
          <div className="content">
            <h3>Enter Personal Details</h3>
            <p>
              The user provides basic details such as name, date of birth,
              mobile number, and address. This step ensures identity verification
              and enhances security.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="step">
          <div className="circle">4</div>
          <div className="content">
            <h3>Review & Confirmation</h3>
            <p>
              All entered details are displayed for confirmation.
              The user must verify the correctness before proceeding.
              This prevents incorrect or fraudulent submissions.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="step">
          <div className="circle">5</div>
          <div className="content">
            <h3>Secure Voting</h3>
            <p>
              The user selects a candidate and casts their vote.
              The system ensures that each voter can vote only once.
              The vote is securely recorded in the database.
            </p>
          </div>
        </div>

        {/* Step 6 */}
        <div className="step">
          <div className="circle">6</div>
          <div className="content">
            <h3>Vote Submission & Completion</h3>
            <p>
              Once submitted, the vote cannot be changed.
              The system confirms successful voting and logs the activity.
              This ensures transparency and integrity of the election.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HowItWorks;