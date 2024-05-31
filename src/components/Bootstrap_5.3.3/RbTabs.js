// Версия 1.01 от 22.05.2024

import React from "react";
import RbButton from "./RbButton";

function RbTabs({ children, classname, theme = "secondary", closeButton }) {
  let alertClass = "alert";
  if (theme) {
    alertClass += ` alert-${theme}`;
  }
  if (classname) {
    alertClass += ` ${classname}`;
  }
  if (closeButton) {
    alertClass += " alert-dismissible fade show";
  }
  if (closeButton) {
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

export default RbTabs;
