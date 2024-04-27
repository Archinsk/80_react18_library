// Версия 1.01 от 27.04.2024

import React from "react";
import "./RbButtonLink.scss";
import RbIcon from "./RbIcon";

function RbButtonLink({
  children,
  href,
  theme,
  size,
  block,
  square,
  icon,
  additionalClasses,
  withoutBtnClass,
}) {
  let btnClass = "";
  if (!withoutBtnClass) {
    btnClass += "btn";
  }
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
  if (additionalClasses) {
    btnClass += ` ${additionalClasses}`;
  }

  return (
    <a href={href} className={btnClass}>
      {icon ? (
        <RbIcon
          name={typeof icon === "string" ? icon : icon.name}
          format={icon.format}
          type={icon.typ}
        />
      ) : null}
      {!(icon && square) ? <span>{children}</span> : null}
    </a>
  );
}

export default RbButtonLink;
