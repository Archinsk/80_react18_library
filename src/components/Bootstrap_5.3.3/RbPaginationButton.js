import React from "react";
import "./RbPaginationButton.scss";

function RbPaginationButton({ children, className }) {
  let buttonClass = "page-link";
  if (className) {
    buttonClass += ` ${className}`;
  }
  return (
    <li>
      <a href="#" className={buttonClass}>
        {children}
      </a>
    </li>
  );
}

export default RbPaginationButton;
