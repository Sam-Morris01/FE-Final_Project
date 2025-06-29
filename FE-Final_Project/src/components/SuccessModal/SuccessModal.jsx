import React from "react";
import "./SuccessModal.css";
import closeIcon from '../../assets/close.svg';

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="success-modal__overlay" onClick={onClose}>
      <div className="success-modal__container" onClick={e => e.stopPropagation()}>
        <button 
          className="success-modal__close-icon" 
          type="button" 
          onClick={onClose} 
          aria-label="Close"
        >
          <img src={closeIcon} alt="Close" />
        </button>
        <p className="success-modal__message">Registration successfully completed!</p>
        <button className="success-modal__sign-in" onClick={onClose}>Sign in</button>
      </div>
    </div>
  );
};

export default SuccessModal; 