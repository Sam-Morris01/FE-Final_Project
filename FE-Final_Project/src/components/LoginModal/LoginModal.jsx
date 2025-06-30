import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({
  isOpen,
  onClose,
  onSwitchToRegister,
  onLogin,
  isLoading = false,
  error = "",
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });

  const isEmailValid = email.match(/^\S+@\S+\.\S+$/);
  const isPasswordValid = password.length > 0;
  const isFormValid = isEmailValid && isPasswordValid && !isLoading;

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid && onLogin) {
      onLogin({ email, password });
    }
  };

  const footer = (
    <>
      <span>or </span>
      <button
        className="modal__form-footer-link"
        type="button"
        onClick={onSwitchToRegister}
      >
        Sign up
      </button>
    </>
  );

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign in"
      footer={footer}
    >
      <form className="modal__form" onSubmit={handleSubmit}>
        {error && <div className="modal__error">{error}</div>}
        <div className="modal__form-field">
          <label className="modal__label" htmlFor="login-email">
            Email
          </label>
          <input
            className={`modal__input${touched.email && !isEmailValid ? " modal__input_invalid" : ""}`}
            id="login-email"
            name="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleBlur}
            disabled={isLoading}
            required
          />
          {touched.email && !isEmailValid && (
            <span className="modal__input-error">Invalid email address</span>
          )}
        </div>
        <div className="modal__form-field">
          <label className="modal__label" htmlFor="login-password">
            Password
          </label>
          <input
            className={`modal__input${touched.password && !isPasswordValid ? " modal__input_invalid" : ""}`}
            id="login-password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handleBlur}
            disabled={isLoading}
            required
          />
        </div>
        <button
          className="modal__submit-button"
          type="submit"
          disabled={!isFormValid}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </ModalWithForm>
  );
}

export default LoginModal;
