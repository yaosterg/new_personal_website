"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

// Create the AuthContext
const AuthContext = createContext();

// Export a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen to the Firebase Auth state change
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); // Set loading to false once the user state is determined
    });

    // Unsubscribe from the listener when unmounting the component
    return () => unsubscribe();
  }, []);

  // Provide the current user and loading state to the entire app
  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}{" "}
      {/* Don't render children until loading is complete */}
    </AuthContext.Provider>
  );
};
