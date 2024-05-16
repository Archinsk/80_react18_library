// Версия 1.01 от 16.05.2024

import React from "react";
import RbButton from "./RbButton";

function RbModalHeader({ children, id, noTitle, noCloseButton }) {
  return (
    <div className="modal-header">
      {noTitle ? (
        children
      ) : (
        <h1 className="modal-title fs-5" id={id + "Label"}>
          {children}
        </h1>
      )}
      {noCloseButton ? null : (
        <RbButton
          type="button"
          className="btn-close"
          dataBsDismiss="modal"
          ariaLabel="Close"
        />
      )}
    </div>
  );
}

export default RbModalHeader;
