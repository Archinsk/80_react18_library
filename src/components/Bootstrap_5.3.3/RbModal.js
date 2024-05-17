import React from "react";
import RbModalHeader from "./RbModalHeader";
import RbModalBody from "./RbModalBody";
import RbModalFooter from "./RbModalFooter";
//import "./RbOffcanvas.scss";

function RbModal({
  children,
  id,
  header,
  footer,
  size,
  verticalCenter,
  scrollable,
  title,
  noCloseButton,
  noBackdrop,
  noKeyboard,
  staticBackdrop,
  custom,
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

  let modalContent;
  if (custom) {
    modalContent = children;
  } else {
    modalContent = (
      <>
        {title || !noCloseButton ? (
          <RbModalHeader id={id} noCloseButton={noCloseButton}>
            {title}
          </RbModalHeader>
        ) : null}
        <RbModalBody>{children}</RbModalBody>
        {footer ? <RbModalFooter /> : null}
      </>
    );
  }
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      dataBsBackdrop="static"
      dataBsKeyboard="false"
    >
      <div className={modalDialogClass}>
        <div className="modal-content">{modalContent}</div>
      </div>
    </div>
  );
}

export default RbModal;
