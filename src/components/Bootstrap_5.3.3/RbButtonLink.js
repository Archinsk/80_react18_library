// Версия 1.01 от 27.04.2024

import React from "react";
import "./RbButtonLink.scss";
import RbIcon from "./RbIcon";

function RbButtonLink({
  children,
  className,
  href,
  theme,
  size,
  block,
  square,
  icon,
  additionalClasses,
  withoutBtnClass,
  dataBsToggle,
  dataBsTarget,
}) {
  let buttonClass = "";
  if (!withoutBtnClass) {
    buttonClass = "btn";
  }
  if (theme) {
    buttonClass += ` btn-${theme}`;
  }
  if (size && ["sm", "lg"].includes(size)) {
    buttonClass += ` btn-${size}`;
  }
  if (block) {
    buttonClass += " btn-block";
  }
  if (square) {
    buttonClass += " btn-square";
  }
  if (icon) {
    buttonClass += " btn-icon";
  }
  if (additionalClasses) {
    buttonClass += ` ${additionalClasses}`;
  }
  if (className) {
    buttonClass += ` ${className}`;
  }

  return (
    <a
      href={href}
      className={buttonClass}
      data-bs-toggle={dataBsToggle || null}
      data-bs-target={dataBsTarget || null}
    >
      {icon ? (
        <RbIcon
          name={typeof icon === "string" ? icon : icon.name}
          format={icon.format}
          type={icon.type}
        />
      ) : null}
      {!(icon && square) ? <span>{children}</span> : null}
    </a>
  );
}

export default RbButtonLink;
