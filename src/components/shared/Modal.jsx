/* eslint-disable react/prop-types */
import { Dialog } from "@material-tailwind/react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, handleClose, children }) => {
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <Dialog open={isOpen} handler={handleClose}>
      {children}
    </Dialog>,
    document.getElementById("portal")
  );
};

export default Modal;
