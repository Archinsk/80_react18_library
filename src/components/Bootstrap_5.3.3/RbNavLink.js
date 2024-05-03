import React from "react";
import RbModalButton from "./RbModalButton";
import { Link } from "react-router-dom";
import RbIcon from "./RbIcon";
import RbBadge from "./RbBadge";
//import "./RbNavLink.scss";

function RbNavLink({
  children,
  type,
  href,
  active,
  disabled,
  icon,
  badge,
  additionalClasses,
  withoutNavLinkClass,
}) {
  let navLinkClass = "";
  if (!withoutNavLinkClass) {
    navLinkClass = "nav-link";
  }
  if (disabled) {
    navLinkClass += " disabled";
  } else if (active) {
    navLinkClass += " active";
  }

  let iconComponent;
  if (icon) {
    iconComponent = (
      <RbIcon
        name={typeof icon === "string" ? icon : icon.name}
        format={icon.format}
        type={icon.type}
      />
    );
  }

  let badgeComponent;
  if (badge) {
    badgeComponent = (
      <RbBadge
        theme={badge.theme}
        pill={badge.pill}
        notNullDisplay={badge.notNullDisplay}
        value={badge.value}
        max={badge.max}
      />
    );
  }

  if (type === "a") {
    return (
      <a href={href} className={navLinkClass}>
        {icon ? iconComponent : null}
        <span>{children}</span>
      </a>
    );
  } else if ((type = "modal-link")) {
    return (
      <RbModalButton
        targetId={href}
        tag="a"
        icon={icon}
        className={navLinkClass}
        withoutBtnClass
        additionalClasses={additionalClasses}
      >
        <span>{children}</span>
        {badge ? badgeComponent : null}
      </RbModalButton>
    );
  } else {
    return (
      <Link to={href} className={navLinkClass}>
        {icon ? iconComponent : null}
        <span>{children}</span>
      </Link>
    );
  }
}

export default RbNavLink;
