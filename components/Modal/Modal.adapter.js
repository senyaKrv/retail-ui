import Modal from './Modal.js';

const ModalAdapter = {
  close(inst) {
    inst.requestClose();
  }
};

Modal.__ADAPTER__ = ModalAdapter;

export default Modal;
