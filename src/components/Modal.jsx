//modal to display createpost.jsx
import react from "react";

function Modal(modal) {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <h3>{modal.title}</h3>
          <button className="modal-close-button" onClick={modal.onClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-content">{modal.children}</div>
      </div>
    </div>
  );
}
