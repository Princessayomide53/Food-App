import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-20"
      onClick={props.onClose}
    />
  );
};
const ModalOverlay = (props) => {
  return (
    <div className="modal fixed top-[20vh] left-[5%] w-[90%] bg-white p-[1rem] rounded-xl shadow-2xl z-30">
      <div className="">{props.children}</div>
    </div>
  );
};

const portalElements = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElements)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElements
      )}
    </>
  );
};

export default Modal;
