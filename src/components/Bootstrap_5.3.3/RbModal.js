// Версия 1.01 от 18.05.2024

import React from "react";
import RbModalHeader from "./RbModalHeader";
import RbModalBody from "./RbModalBody";

function RbModal({
  children,
  id,
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
      </>
    );
  }
  let backdrop;
  if (noBackdrop) {
    backdrop = "false";
  } else if (staticBackdrop) {
    backdrop = "static";
  }
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      data-bs-backdrop={backdrop}
      data-bs-keyboard={noKeyboard ? "false" : null}
    >
      <div className={modalDialogClass}>
        <div className="modal-content">{modalContent}</div>
      </div>
    </div>
  );
}

export default RbModal;
