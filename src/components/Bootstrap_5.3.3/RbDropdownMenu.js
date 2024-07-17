import React from "react";

function RbDropdownMenu({ children, className, custom, itemsList }) {
  let dropdownMenuClass = "dropdown-menu";
  if (className) {
    dropdownMenuClass += ` ${className}`;
  }
  if (custom) {
    return <div class={dropdownMenuClass}>{children}</div>;
  } else {
    return null;
  }
}

export default RbDropdownMenu;
