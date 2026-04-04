function Modal({ isOpen, onClose, title, desc, vote }) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-desc">{desc || "Sem descrição."}</p>
        <div className="modal-vote">
          Nota:{" "}
          <b>{typeof vote === "number" ? vote.toFixed(1) : (vote ?? "N/A")}</b>
        </div>
      </div>
    </div>
  );
}

export default Modal;
