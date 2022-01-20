export const Modal = ({ onCancel, onConfirm, children }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        {/* header to click on model */}
        <div className="modal__header">
          <p>POST NEW POST</p>
        </div>
        {/* main model contect on pop-up */}
        <div className="modal__body">{children}</div>
        {/* footer */}
        <div className="modal__footer">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>Add contact</button>
        </div>
      </div>
    </div>
  );
};
