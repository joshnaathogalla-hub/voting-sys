import React, { useState } from "react";

function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [voterId, setVoterId] = useState("");

  const handleRegister = async () => {

  const user = {
    email: email,
    password: password,
    voterId: voterId
  };

  try {
    const res = await fetch("https://voting-sys-2.onrender.com/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    if (res.ok) {
      alert("Registration Successful");
    } else {
      alert("Registration Failed");
    }

  } catch (err) {
    console.error(err);
    alert("Server Error");
  }
};

  return (
    <div>
      <h2>Register</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <input placeholder="Voter ID" onChange={(e) => setVoterId(e.target.value)} />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;