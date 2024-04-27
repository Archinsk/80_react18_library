// Версия 1.01 от 27.04.2024

import React from "react";
import "./RbCollapse.scss";

function RbCollapse({ children, id, parentId }) {
  return (
    <div
      className="collapse"
      id={id}
      dataParent={parentId ? "#" + parentId : null}
    >
      {children}
    </div>
  );
}

export default RbCollapse;
