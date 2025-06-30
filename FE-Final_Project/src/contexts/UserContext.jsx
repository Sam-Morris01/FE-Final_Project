import React, { createContext, useContext, useState, useEffect } from "react";
import { signIn, checkToken, removeToken } from "../utils/auth";

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is already logged in on app start
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log("Checking for existing token:", token ? "Found" : "Not found");

    if (token) {
      checkToken()
        .then((userData) => {
          console.log("Token validation successful:", userData);
          console.log(
            "User data structure:",
            JSON.stringify(userData, null, 2),
          );
          setCurrentUser(userData);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error("Token validation failed:", error);
          removeToken();
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      console.log("No token found, user not logged in");
      setIsLoading(false);
    }
  }, []);

  const handleLogin = async (email, password) => {
    console.log("Attempting login with:", { email, password });
    try {
      setIsLoading(true);
      const data = await signIn({ email, password });
      console.log("Login successful:", data);
      console.log("Login data structure:", JSON.stringify(data, null, 2));
      console.log("Setting currentUser to:", data.user);
      setCurrentUser(data.user);
      setIsLoggedIn(true);
      return { success: true };
    } catch (error) {
      console.error("Login failed:", error);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    console.log("Logging out user");
    removeToken();
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  // Debug currentUser changes
  useEffect(() => {
    console.log("Current user updated:", currentUser);
    if (currentUser) {
      console.log("Current user name:", currentUser.name);
      console.log("Current user keys:", Object.keys(currentUser));
    }
  }, [currentUser]);

  const value = {
    currentUser,
    isLoggedIn,
    isLoading,
    handleLogin,
    handleLogout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
