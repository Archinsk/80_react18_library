// Версия 1.01 от 31.05.2024

import React from "react";

function RbTabPane({ children, className, id, active }) {
  let tabPaneClass = "tab-pane fade";
  if (active) {
    tabPaneClass += " show active";
  }
  if (className) {
    tabPaneClass += ` ${className}`;
  }

  return (
    <div
      className={tabPaneClass}
      id={id}
      aria-labelledby={`${id}-tab`}
      role="tabpanel"
    >
      {children}
    </div>
  );
}

export default RbTabPane;
