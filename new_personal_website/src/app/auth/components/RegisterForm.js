"use client";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/api/user/register",
        {
          email,
          password,
          firstName,
          lastName,
        },
        {
          headers: {
            "Content-Type": "application/json", // Ensure this is set
          },
        }
      );
    } catch (err) {
      console.error("Error registering user: ", err.response.data);
      setError(error.response.data.message || "Error");
    }
  };
  return (
    <form onSubmit={handleRegister}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password "
        required
      />
      <input
        type="text"
        value={firstName}
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        value={lastName}
        placeholder=" Last Name "
        onChange={(e) => setLastName(e.target.value)}
      />
      <button type="submit">Register</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Register;
