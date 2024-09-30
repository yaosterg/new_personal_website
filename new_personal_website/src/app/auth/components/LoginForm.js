// components/AuthForm.js

"use client";

import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../../firebase";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign-up
  const [message, setMessage] = useState(""); // State for feedback messages
  const [error, setError] = useState(""); // State for error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setMessage(""); // Clear previous messages

    try {
      if (isLogin) {
        // Log in existing user
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Login successful!");
      } else {
        // Sign up new user
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("Sign-up successful! You can now log in.");
      }
    } catch (error) {
      console.error("Auth error:", error);
      setError(
        "Failed to authenticate. Please check your credentials and try again."
      );
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      {message && <p className="message">{message}</p>}
      {error && <p className="error">{error}</p>}
      {/* <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create an account" : "Login with existing account"}
      </button> */}
    </div>
  );
};

export default LoginForm;
