// Версия 1.01 от 27.04.2024

import React from "react";

function RbBadge({ children, className, theme }) {
  let badgeClass = "badge";
  if (className) {
    badgeClass += ` ${className}`;
  }
  if (theme) {
    badgeClass += ` text-bg-${theme}`;
  } else {
    badgeClass += " text-body";
  }

  return <span className={badgeClass}>{children}</span>;
}

export default RbBadge;
