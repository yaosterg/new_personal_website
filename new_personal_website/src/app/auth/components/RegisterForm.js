"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

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
      setError(response.data.message);
      if (response.status === 200) {
        router.push("/");
      }
    } catch (err) {
      console.error("Error registering user: ", err.response.data.message);
      setError(err.response.data.error || "Error");
    }
  };

  return (
    <div>
      {" "}
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
    </div>
  );
};

export default Register;
