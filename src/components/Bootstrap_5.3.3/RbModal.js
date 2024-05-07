import React from "react";
//import "./RbOffcanvas.scss";

function RbModal({
  id,
  header,
  footer,
  size,
  verticalCenter,
  scrollable,
  noTitle,
  noCloseButton,
  noBackdrop,
  noKeyboard,
  staticBackdrop,
}) {
  let modalDialogClass = "modal-dialog";
  if (scrollable) {
    modalDialogClass += " modal-dialog-scrollable";
  }
  if (verticalCenter) {
    modalDialogClass += " modal-dialog-centered";
  }
  if (size && ["sm", "lg", "xl"].includes(size)) {
    modalDialogClass += " modal-" + size;
  }

  return (
    <div className="modal fade" id={id} tabIndex="-1">
      <div className={modalDialogClass}>
        <div className="modal-content">Modal Content</div>
      </div>
    </div>
  );
}

export default RbModal;
