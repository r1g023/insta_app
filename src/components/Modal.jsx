//modal to display createpost.jsx
import React from "react";

function Modal(props) {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <h3>{props.title}</h3>
          <button className="modal-close-button" onClick={props.onClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-content">{props.children}</div>
        <button onClick={props.cancelModal}>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;
