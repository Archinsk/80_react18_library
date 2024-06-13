// Версия 1.01 от 13.06.2024

import React from "react";
import "./RbPaginationButton.scss";

function RbPaginationButton({ children, className }) {
  let buttonClass = "page-item";
  if (className) {
    buttonClass += ` ${className}`;
  }
  return (
    <li className={buttonClass}>
      <a href="#" className="page-link">
        {children}
      </a>
    </li>
  );
}

export default RbPaginationButton;
