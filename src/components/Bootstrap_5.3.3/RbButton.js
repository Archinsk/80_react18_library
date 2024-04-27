// Версия 1.01 от 27.04.2024

import React from "react";
import "./RbButton.scss";
import RbIcon from "./RbIcon";
import RbBadge from "./RbBadge";

function RbButton({
  children,
  type = "button",
  theme,
  size,
  block,
  square,
  icon,
  badge,
  additionalClasses,
  dataBsToggle,
  dataBsTarget,
  ariaExpanded,
  ariaControls,
}) {
  let btnClass = "btn";
  if (theme) {
    btnClass += ` btn-${theme}`;
  }
  if (size && ["sm", "lg"].includes(size)) {
    btnClass += ` btn-${size}`;
  }
  if (block) {
    btnClass += " btn-block";
  }
  if (square) {
    btnClass += " btn-square";
  }
  if (icon) {
    btnClass += " btn-icon";
  }
  if (badge) {
    btnClass += " btn-badge";
  }
  if (additionalClasses) {
    btnClass += ` ${additionalClasses}`;
  }

  return (
    <button
      type={type}
      className={btnClass}
      data-bs-toggle={dataBsToggle ? dataBsToggle : null}
      data-bs-target={dataBsTarget ? dataBsTarget : null}
      aria-expanded={ariaExpanded ? ariaExpanded : null}
      aria-controls={ariaControls ? ariaControls : null}
    >
      {icon ? (
        <RbIcon
          name={typeof icon === "string" ? icon : icon.name}
          format={icon.format}
          type={icon.type}
        />
      ) : null}
      {!(icon && square) ? <span>{children}</span> : null}
      {badge ? (
        <RbBadge
          theme={badge.theme}
          pill={badge.pill}
          notNullDisplay={badge.notNullDisplay}
          value={badge.value}
          max={badge.max}
        />
      ) : null}
    </button>
  );
}

export default RbButton;
