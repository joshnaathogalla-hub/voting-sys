import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function VoteDone() {

  const navigate = useNavigate();

  // ✅ Auto redirect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/verify");   // 👈 redirect to verify page
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="done-container">

      <div className="done-card">
        <h1>✅ Vote Successfully Casted</h1>
        <p>Thank you for participating in the election.</p>
        <p>Redirecting to verification page...</p>

        {/* Optional button */}
        
      </div>

    </div>
  );
}

export default VoteDone;