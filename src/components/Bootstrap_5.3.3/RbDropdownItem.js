// Версия 1.01 от 27.04.2024

import React from "react";
import "./RbDropdownItem.scss";
import RbIcon from "./RbIcon";
import { Link } from "react-router-dom";

function RbDropdownItem({ children, type, href, active, disabled, icon }) {
  let navLinkClass = "dropdown-item";
  if (disabled) {
    navLinkClass += " disabled";
  } else if (active) {
    navLinkClass += " active";
  }
  if (type === "a") {
    return (
      <a href={href} className={navLinkClass}>
        {icon ? (
          <RbIcon
            name={typeof icon === "string" ? icon : icon.name}
            format={icon.format}
            type={icon.type}
          />
        ) : null}
        <span>{children}</span>
      </a>
    );
  } else {
    return (
      <Link to={href} className={navLinkClass}>
        {icon ? (
          <RbIcon
            name={typeof icon === "string" ? icon : icon.name}
            format={icon.format}
            type={icon.type}
          />
        ) : null}
        <span>{children}</span>
      </Link>
    );
  }
}

export default RbDropdownItem;
