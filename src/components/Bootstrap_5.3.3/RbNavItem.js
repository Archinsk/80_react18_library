// Версия 1.01 от 15.05.2024

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

  let additionalClassesArray;
  if (additionalClasses && additionalClasses.navLink) {
    additionalClassesArray = additionalClasses.navLink.split(" ");
  } else {
    additionalClassesArray = [];
  }

  const linkIsSquareButton = !!(
    additionalClassesArray.includes("btn-square") ||
    (additionalClassesArray.includes("btn-square-sm") &&
      windowData &&
      windowData.width >= 576) ||
    (additionalClassesArray.includes("btn-square-md") &&
      windowData &&
      windowData.width >= 768) ||
    (additionalClassesArray.includes("btn-square-lg") &&
      windowData &&
      windowData.width >= 992) ||
    (additionalClassesArray.includes("btn-square-xl") &&
      windowData &&
      windowData.width >= 1200)
  );

  let dropdownItems;
  if (dropdown) {
    dropdownItems = dropdownItemsList.map((dropdownItem) => {
      if (!dropdownItem.dropdown) {
        return (
          <RbDropdownItem
            key={dropdownItem.id}
            type={dropdownItem.type}
            href={dropdownItem.href}
            active={dropdownItem.active}
            disabled={dropdownItem.disabled}
            icon={dropdownItem.icon}
          >
            {dropdownItem.name}
          </RbDropdownItem>
        );
      } else {
        return (
          <RbNavItem
            key={dropdownItem.id}
            id={dropdownItem.id}
            type={dropdownItem.type}
            href={dropdownItem.href}
            active={dropdownItem.active}
            disabled={dropdownItem.disabled}
            dropdown={dropdownItem.dropdown}
            icon={dropdownItem.icon}
            badge={dropdownItem.badge}
            additionalClasses={dropdownItem.additionalClasses}
            windowData={windowData}
            dropdownItemsList={dropdownItem.dropdownItemsList}
            isNestedDropdown
          >
            {dropdownItem.name}
          </RbNavItem>
        );
      }
    });
  }

  if (!dropdown) {
    if (type === "modal-link" && linkIsSquareButton) {
      return (
        <li className={navItemClass}>
          <RbModalButton
            icon={icon}
            badge={badge}
            additionalclasses={
              additionalClasses ? additionalClasses.navLink : ""
            }
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
          type="a"
          href="#"
          active={active}
          disabled={disabled}
          icon={icon}
          badge={badge}
          className={dropdownLinkClass}
          withoutNavLinkClass={isNestedDropdown}
          role="button"
          dataBsToggle="dropdown"
          ariaExpanded="false"
        >
          {children}
        </RbNavLink>
        <div className="dropdown-menu">{dropdownItems}</div>
      </li>
    );
  }
}

export default RbNavItem;
