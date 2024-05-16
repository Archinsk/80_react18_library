// Версия 1.01 от 16.05.2024

import React from "react";
import "./RbNav.scss";
import RbNavItem from "./RbNavItem";
import RbNavLink from "./RbNavLink";

function RbNav({
  children,
  tag,
  type,
  position,
  vertical,
  fill,
  justified,
  scroll,
  itemsList,
  windowData,
  className,
}) {
  let navClass = "nav";
  if (className) {
    navClass += ` ${className}`;
  }
  if (type === "tabs") {
    navClass += " nav-tabs";
  } else if (type === "pills") {
    navClass += " nav-pills";
  }
  if (position === "center") {
    navClass += " justify-content-center";
  } else if (position === "end") {
    navClass += " justify-content-end";
  }
  if (vertical) {
    navClass += " flex-column";
  }
  if (fill) {
    navClass += " nav-fill";
  }
  if (justified) {
    navClass += " nav-justified";
  }
  if (scroll) {
    navClass += " navbar-nav-scroll flex-nowrap";
  }

  console.log("itemsList in nav");
  console.log(tag);
  console.log(itemsList);

  let navItems = null;
  if (itemsList) {
    navItems = itemsList.map((navItem) => {
      if (tag === "ul") {
        return (
          <RbNavItem
            key={navItem.id}
            id={navItem.id}
            type={navItem.type}
            href={navItem.href}
            active={navItem.active}
            disabled={navItem.disabled}
            dropdown={navItem.dropdown}
            dropdownItemsList={navItem.dropdownItemsList}
            icon={navItem.icon}
            badge={navItem.badge}
            additionalClasses={navItem.additionalClasses}
            windowData={windowData}
            name={navItem.name}
          >
            {navItem.name}
          </RbNavItem>
        );
      } else {
        return (
          <RbNavLink
            key={navItem.id}
            type={navItem.type}
            href={navItem.href}
            active={navItem.active}
            disabled={navItem.disabled}
            icon={navItem.icon}
            badge={navItem.badge}
            additionalClasses={navItem.additionalClasses}
            windowData={windowData}
          >
            {navItem.name}
          </RbNavLink>
        );
      }
    });
  }

  if (tag === "ul") {
    return (
      <ul className={navClass} style={scroll ? { maxHeight: "7.5rem" } : null}>
        {navItems || children}
      </ul>
    );
  } else {
    return <nav className={navClass}>{navItems || children}</nav>;
  }
}

export default RbNav;
