import React from "react";
import "./SuccessModal.css";
import closeIcon from "../../assets/icons/close.svg";

const SuccessModal = ({
  isOpen,
  onClose,
  title = "",
  message = "",
  buttonText = "OK",
  onButtonClick = null,
  children,
}) => {
  if (!isOpen) return null;
  return (
    <div className="success-modal__overlay" onClick={onClose}>
      <div
        className="success-modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="success-modal__close-icon"
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
          <img src={closeIcon} alt="Close" />
        </button>
        {title && <h2 className="success-modal__title">{title}</h2>}
        {message && <p className="success-modal__message">{message}</p>}
        {children}
        {buttonText && (
          <button
            className="success-modal__sign-in"
            onClick={onButtonClick || onClose}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default SuccessModal;
