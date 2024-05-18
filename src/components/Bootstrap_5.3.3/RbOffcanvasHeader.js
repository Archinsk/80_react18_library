// Версия 1.01 от 18.05.2024

import React from "react";
import RbButton from "./RbButton";

function RbOffcanvasHeader({ children, id, noTitle, noCloseButton }) {
  return (
    <div className="offcanvas-header">
      {noTitle ? (
        children
      ) : (
        <h5 className="offcanvas-title" id={id + "Label"}>
          {children}
        </h5>
      )}
      {noCloseButton ? null : (
        <RbButton
          type="button"
          className="btn-close"
          dataBsDismiss="offcanvas"
          ariaLabel="Close"
        ></RbButton>
      )}
    </div>
  );
}

export default RbOffcanvasHeader;
