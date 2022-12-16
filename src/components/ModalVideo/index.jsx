import Modal from "../Modal";
import "./styles.scss";

const ModalVideo = ({ isOpenModal, closeModal }) => {
  return (
    <div>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <iframe
          src="https://www.youtube.com/embed/DlD2sZXR8RI"
          className="iframe__video"
          allowFullScreen
          ng-show="showvideo"
          width="auto"
          height="auto"
          title="myFrame"
        ></iframe>
      </Modal>
    </div>
  );
};

export default ModalVideo;
