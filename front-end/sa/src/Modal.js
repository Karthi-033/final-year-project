import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, crop, procedure, error }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Crop Procedure for {crop}</h2>
          <button className="modal-close" onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          {error ? (
            <p>Error: {error}</p>
          ) : (
            <pre>{procedure}</pre>  // Display procedure with formatting
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
