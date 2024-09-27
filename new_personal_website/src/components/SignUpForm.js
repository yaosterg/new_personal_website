"use client";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log("This is axios post body", { email, password });
      const response = await axios.post(
        "/api/user/register",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json", // Ensure this is set
          },
        }
      );
      console.log("User registered;", response.data);
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
      <button type="submit">Register</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Register;
