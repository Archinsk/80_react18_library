import React from "react";
import "./RbNavItem.scss";
import RbModalButton from "./RbModalButton";
import RbNavLink from "./RbNavLink";
import RbDropdownItem from "./RbDropdownItem";

function RbNavItem({
  children,
  id,
  type,
  href,
  active,
  disabled,
  dropdown,
  icon,
  badge,
  additionalClasses,
  windowData,
  dropdownItemsList,
  name,
  isNestedDropdown,
}) {
  let navItemClass = "";
  if (!isNestedDropdown) {
    navItemClass = "nav-item";
  }
  if (dropdown) {
    navItemClass += " dropdown";
  }

  let dropdownLinkClass = "dropdown-toggle";
  if (isNestedDropdown) {
    dropdownLinkClass += " dropdown-item";
  }

  /*let additionalClassesArray;
  if (this.additionalClasses && this.additionalClasses.navLink) {
    additionalClassesArray = this.additionalClasses.navLink.split(" ");
  } else {
    return false;
  }
  return (
    additionalClassesArray.includes("btn-square") ||
    (additionalClassesArray.includes("btn-square-sm") &&
      this.windowData.width >= 576) ||
    (additionalClassesArray.includes("btn-square-md") &&
      this.windowData.width >= 768) ||
    (additionalClassesArray.includes("btn-square-lg") &&
      this.windowData.width >= 992) ||
    (additionalClassesArray.includes("btn-square-xl") &&
      this.windowData.width >= 1200)
  );*/

  if (!dropdown) {
    if (type === "modal-link") {
      return (
        <li className={navItemClass}>
          <RbModalButton
            icon={icon}
            badge={badge}
            square
            dataBsTarget={"#" + href}
            className="mx-2"
          ></RbModalButton>
        </li>
      );
    } else {
      return (
        <li className={navItemClass}>
          <RbNavLink
            type={type}
            href={href}
            active={active}
            disabled={disabled}
            icon={icon}
            badge={badge}
          >
            {children}
          </RbNavLink>
        </li>
      );
    }
  } else {
    return (
      <li className={navItemClass}>
        <RbNavLink
          id={id}
          type={type}
          href={href}
          active={active}
          disabled={disabled}
          icon={icon}
          badge={badge}
          className={dropdownLinkClass}
          withoutNavLinkClass={isNestedDropdown}
          role="button"
          dataToggle="dropdown"
          ariaExpanded="false"
        >
          {children}
        </RbNavLink>
        <div className="dropdown-menu">
          <RbDropdownItem></RbDropdownItem>
        </div>
      </li>
    );
  }
}

export default RbNavItem;
