// Версия 1.01 от 27.04.2024

import React from "react";
import "./RbAlert.scss";

function RbAlert({ children, classname, theme = "secondary", closeButton }) {
  let alertClass = "alert";
  if (theme) {
    alertClass += ` alert-${theme}`;
  }
  if (classname) {
    alertClass += ` ${classname}`;
  }
  return (
    <div class={alertClass} role="alert">
      {children}
    </div>
  );
}

export default RbAlert;
