import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function RegisterModal({ isOpen, onClose, onSwitchToLogin, onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({ name: false, email: false, password: false });

  const isNameValid = name.trim().length > 0;
  const isEmailValid = email.match(/^\S+@\S+\.\S+$/);
  const isPasswordValid = password.length > 0;
  const isFormValid = isNameValid && isEmailValid && isPasswordValid;

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid && onRegister) {
      onRegister({ name, email, password });
    }
  };

  const footer = (
    <>
      <span>or </span>
      <button className="modal__form-footer-link" type="button" onClick={onSwitchToLogin}>
        Sign in
      </button>
    </>
  );

  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose} title="Sign up" footer={footer}>
      <form className="modal__form" onSubmit={handleSubmit}>
        <div className="modal__form-field">
          <label className="modal__label" htmlFor="register-name">Name</label>
          <input
            className={`modal__input${touched.name && !isNameValid ? ' modal__input_invalid' : ''}`}
            id="register-name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            onBlur={handleBlur}
            required
          />
          {touched.name && !isNameValid && (
            <span className="modal__input-error">Name is required</span>
          )}
        </div>
        <div className="modal__form-field">
          <label className="modal__label" htmlFor="register-email">Email</label>
          <input
            className={`modal__input${touched.email && !isEmailValid ? ' modal__input_invalid' : ''}`}
            id="register-email"
            name="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleBlur}
            required
          />
          {touched.email && !isEmailValid && (
            <span className="modal__input-error">Invalid email address</span>
          )}
        </div>
        <div className="modal__form-field">
          <label className="modal__label" htmlFor="register-password">Password</label>
          <input
            className={`modal__input${touched.password && !isPasswordValid ? ' modal__input_invalid' : ''}`}
            id="register-password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handleBlur}
            required
          />
        </div>
        <button className="modal__submit-button" type="submit" disabled={!isFormValid}>
          Sign up
        </button>
      </form>
    </ModalWithForm>
  );
}

export default RegisterModal; 