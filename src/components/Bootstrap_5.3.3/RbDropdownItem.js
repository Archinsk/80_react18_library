// Версия 1.01 от 27.04.2024

import React from "react";
import "./RbDropdownItem.scss";
import RbIcon from "./RbIcon";
import { Link } from "react-router-dom";
import RbBadge from "./RbBadge";

function RbDropdownItem({
  children,
  className,
  type,
  href,
  active,
  disabled,
  icon,
  badge,
}) {
  let dropItemClass = "dropdown-item";
  if (className) {
    dropItemClass += ` ${className}`;
  }
  if (disabled) {
    dropItemClass += " disabled";
  } else if (active) {
    dropItemClass += " active";
  }

  let iconComponent;
  if (icon) {
    iconComponent = (
      <RbIcon
        name={typeof icon === "string" ? icon : icon.name}
        format={icon.format}
        type={icon.type}
        className={icon.className}
      />
    );
  }

  let badgeComponent;
  if (badge) {
    badgeComponent = (
      <RbBadge theme={badge.theme} className={badge.className}>
        {badge.text}
      </RbBadge>
    );
  }

  if (type === "a") {
    return (
      <a href={href} className={dropItemClass}>
        {icon ? iconComponent : null}
        <span>{children}</span>
        {badge ? badgeComponent : null}
      </a>
    );
  } else {
    return (
      <Link to={href} className={dropItemClass}>
        {icon ? iconComponent : null}
        <span>{children}</span>
        {badge ? badgeComponent : null}
      </Link>
    );
  }
}

export default RbDropdownItem;
