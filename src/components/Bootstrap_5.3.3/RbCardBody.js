import React from "react";

function RbCardBody({ children, className }) {
  let cardBodyClass = "card-body";
  if (className) {
    cardBodyClass += ` ${className}`;
  }
  return <div className={cardBodyClass}>{children}</div>;
}

export default RbCardBody;
