// Версия 1.01 от 27.04.2024

import React from "react";
import "./RbCollapse.scss";

function RbCollapse({ children, id, parentId, className }) {
  let collapseClass = "collapse";
  if (className) {
    collapseClass += ` ${className}`;
  }
  return (
    <div
      className={collapseClass}
      id={id}
      dataParent={parentId ? "#" + parentId : null}
    >
      {children}
    </div>
  );
}

export default RbCollapse;
