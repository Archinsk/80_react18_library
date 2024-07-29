import React from "react";
import RbDropdownItem from "./RbDropdownItem";

function RbDropdownMenu({ children, className, custom, itemsList }) {
  let dropdownMenuClass = "dropdown-menu";
  if (className) {
    dropdownMenuClass += ` ${className}`;
  }
  if (custom) {
    return <div className={dropdownMenuClass}>{children}</div>;
  } else if (itemsList) {
    return itemsList.map((item) => {
      return (
        <RbDropdownItem
          className={item.className}
          type={item.type}
          href={item.href}
          active={item.active}
          disabled={item.disabled}
          icon={item.icon}
          badge={item.badge}
        >
          {item.name}
        </RbDropdownItem>
      );
    });
  } else {
    return null;
  }
}

export default RbDropdownMenu;
