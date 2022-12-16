import "./styles.scss";
import { RxCross1 } from "react-icons/rx";

const Modal = ({ isOpen, closeModal, title, children }) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`modal ${isOpen && "modal-open"}`} onClick={closeModal}>
      <div className="modal__dialog" onClick={handleModalDialogClick}>
        <h1>{title}</h1>
        <button onClick={closeModal}>
          <RxCross1 />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
