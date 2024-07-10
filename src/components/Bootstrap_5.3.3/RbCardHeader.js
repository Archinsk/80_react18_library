import React from "react";

function RbCardHeader({ children, className }) {
  let cardHeaderClass = "card-header";
  if (className) {
    cardHeaderClass += ` ${className}`;
  }
  return <div className={cardHeaderClass}>{children}</div>;
}

export default RbCardHeader;
