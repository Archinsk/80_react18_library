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
}) {
  let navClass = "nav";
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

  if (tag === "ul") {
    return (
      <ul className={navClass}>
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
      </ul>
    );
  } else {
    return (
      <nav className={navClass}>
        <RbNavLink
          key={navLink.id}
          type={navLink.type}
          href={navLink.href}
          active={navLink.active}
          disabled={navLink.disabled}
          icon={navLink.icon}
          badge={navLink.badge}
          additionalClasses={navLink.additionalClasses}
          windowData={windowData}
        >
          {navLink.name}
        </RbNavLink>
        {children}
      </nav>
    );
  }
}

export default RbNav;
