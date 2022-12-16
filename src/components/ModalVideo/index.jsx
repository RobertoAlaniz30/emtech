import React from "react";
import Modal from "../Modal";

const ModalVideo = ({ isOpenModal, closeModal }) => {
  return (
    <div>
      <Modal isOpen={isOpenModal} closeModal={closeModal} title="Asesorados">
        <iframe
          src="https://www.youtube.com/embed/DlD2sZXR8RI"
          allowFullScreen
          ng-show="showvideo"
          width="420"
          height="315"
          title="myFrame"
        ></iframe>
      </Modal>
    </div>
  );
};

export default ModalVideo;
