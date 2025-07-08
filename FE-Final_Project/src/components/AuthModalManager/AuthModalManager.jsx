import React, { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import { useUser } from "../../contexts/UserContext";

function AuthModalManager({ isOpen, onClose, isSuccessModalOpen, onOpenSuccessModal, onCloseSuccessModal }) {
  const [mode, setMode] = useState("login"); // 'login' or 'register'
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { handleLogin } = useUser();

  const handleSwitchToRegister = () => {
    setMode("register");
    setError("");
  };

  const handleSwitchToLogin = () => {
    setMode("login");
    setError("");
  };

  const handleLoginSubmit = async (data) => {
    setIsLoading(true);
    setError("");

    try {
      const result = await handleLogin(data.email, data.password);
      if (result.success) {
        onClose();
        setError("");
      } else {
        setError(result.error || "Login failed");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (data) => {
    setIsLoading(true);
    setError("");

    try {
      // Simulate registration logic
      onOpenSuccessModal(); // Open success modal via prop
      setMode("login"); // Optionally switch to login mode
      onClose(); // Close the auth modal
    } catch (err) {
      setError("Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {mode === "login" && (
        <LoginModal
          isOpen={isOpen && !isSuccessModalOpen}
          onClose={onClose}
          onSwitchToRegister={handleSwitchToRegister}
          onLogin={handleLoginSubmit}
          isLoading={isLoading}
          error={error}
        />
      )}
      {mode === "register" && (
        <RegisterModal
          isOpen={isOpen && !isSuccessModalOpen}
          onClose={onClose}
          onSwitchToLogin={handleSwitchToLogin}
          onRegister={handleRegister}
          isLoading={isLoading}
          error={error}
        />
      )}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={onCloseSuccessModal}
        message="Registration successfully completed!"
        buttonText="Sign in"
        onButtonClick={onCloseSuccessModal}
      />
    </>
  );
}

export default AuthModalManager;
