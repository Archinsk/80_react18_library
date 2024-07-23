// Версия 1.01 от 22.05.2024

import React from "react";
import RbButton from "./RbButton";

function RbAlert({ children, className, theme, closeButton }) {
  let alertClass = "alert";
  if (className) {
    alertClass += ` ${className}`;
  }
  if (theme) {
    alertClass += ` alert-${theme}`;
  }
  if (closeButton) {
    alertClass += " alert-dismissible fade show";
    return (
      <div class={alertClass} role="alert">
        {children}
        <RbButton
          className="btn-close"
          dataBsDismiss="alert"
          ariaLabel="Close"
        />
      </div>
    );
  } else {
    return (
      <div class={alertClass} role="alert">
        {children}
      </div>
    );
  }
}

export default RbAlert;
