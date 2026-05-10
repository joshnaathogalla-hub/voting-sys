import React from "react";
import "../styles.css";

function Contact() {
  return (
    <div className="contact-container">

      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We’re here to help you with any issues or queries
      </p>

      <div className="contact-card">

        <div className="contact-item">
          <h3>📧 Email</h3>
          <p>support@onlinevoting.com</p>
        </div>

        <div className="contact-item">
          <h3>📞 Phone</h3>
          <p>040 2345 5303</p>
        </div>

      </div>

    </div>
  );
}

export default Contact;