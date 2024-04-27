// Версия 1.01 от 27.04.2024

import React from "react";
import "./RbBadge.scss";

function RbBadge({ children, theme, pill, value, max, notNullDisplay }) {
  let badgeClass = "badge";
  if (theme) {
    badgeClass += ` text-bg-${theme}`;
  } else {
    badgeClass += " text-body";
  }
  if (pill) {
    badgeClass += " rounded-pill";
  }
  const roundedValue = max && Number(value) > Number(max) ? max + "+" : value;
  if (!(notNullDisplay && !Number(value)) && typeof value !== "undefined") {
    return <span className={badgeClass}>{roundedValue}</span>;
  } else {
    return <span className={badgeClass}>{children}</span>;
  }
}

export default RbBadge;
