"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../../../firebase";
import { useAuth } from "../../AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { currentUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Signin was successful");
      router.push("/user/dashboard");
    } catch (err) {
      console.error("Login error", err.message);
      setError(err.message);
    }
  };

  const handleSignout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (err) {
      console.error("Error signing out", error);
    }
  };

  return (
    <div>
      {currentUser ? (
        <div>
          <p>Welcome user {currentUser.email}</p>
          <button
            onClick={(e) => {
              handleSignout();
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Login</button>
          {error}
        </form>
      )}
    </div>
  );
}
