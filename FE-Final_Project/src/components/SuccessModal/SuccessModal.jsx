import React from "react";
import ModalBase from "../ModalWithForm/ModalWithForm";
import "./SuccessModal.css";

const SuccessModal = ({
  isOpen,
  onClose,
  message = "",
  buttonText = "OK",
  onButtonClick = null,
  children,
}) => {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} showTitle={false}>
      <div className="success-modal__container-content">
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
    </ModalBase>
  );
};

export default SuccessModal;
