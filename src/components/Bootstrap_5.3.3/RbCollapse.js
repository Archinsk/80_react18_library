// Версия 1.01 от 27.04.2024

import React from "react";
import "./RbCollapse.scss";

function RbCollapse({ children, id, accordionId, className }) {
  let collapseClass = "collapse";
  if (className) {
    collapseClass += ` ${className}`;
  }
  return (
    <div
      className={collapseClass}
      id={id}
      data-bs-parent={accordionId ? "#" + accordionId : null}
    >
      {children}
    </div>
  );
}

export default RbCollapse;
