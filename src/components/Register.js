// Register.js

import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { auth } from "./firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [registered, setRegistered] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registered successfully
        const user = userCredential.user;
        setRegistered(true);
      })
      .catch((error) => {
        // Handle errors
        setError(error.message);
      });
  };

  if (registered) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Register;

