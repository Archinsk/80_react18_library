// Версия 1.01 от 27.04.2024

import React from "react";
import "./RbIcon.scss";

function RbIcon({ className, format = "font", type = "material", name }) {
  let iconClass = "icon";
  if (className) {
    iconClass += ` ${className}`;
  }
  if (format === "font" && type === "material") {
    iconClass += " material-icon";
  }

  return <span className={iconClass}>{name}</span>;
}

export default RbIcon;
