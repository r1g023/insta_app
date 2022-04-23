//modal to display createpost.jsx
import React from "react";

function Modal({ children, onCancel }) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal">{children}</div>
        <div className="footer">
          <button onClick={onCancel}>Close Modal</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
