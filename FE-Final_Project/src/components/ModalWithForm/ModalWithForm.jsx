import React, { useEffect } from 'react';
import './ModalWithForm.css';
import closeIcon from '../../assets/close.svg';
import useModalClose from '../../hooks/useModalClose';

function ModalWithForm({ isOpen, onClose, title, children, footer }) {
    useModalClose(isOpen, onClose);
    
    // Prevent body scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
        
        // Cleanup function to remove class when component unmounts
        return () => {
            document.body.classList.remove('modal-open');
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
                <h2 className="modal__title">{title}</h2>
                {children}
                {footer && (
                  <div className="modal__form-footer">{footer}</div>
                )}
            </div>
        </div>
    );
}

export default ModalWithForm; 