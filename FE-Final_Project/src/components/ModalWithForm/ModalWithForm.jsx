import React, { useEffect } from "react";
import "./ModalWithForm.css";
import closeIcon from "../../assets/icons/back.svg";
import useModalClose from "../../hooks/useModalClose";

function ModalBase({ isOpen, onClose, title = "", showTitle = true, children, footer }) {
  useModalClose(isOpen, onClose);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="modal modal_opened">
      <div className="modal__container">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
          <img src={closeIcon} alt="Close" />
        </button>
        {showTitle && title && <h2 className="modal__title">{title}</h2>}
        {children}
        {footer && <div className="modal__form-footer">{footer}</div>}
      </div>
    </div>
  );
}

export default ModalBase;
