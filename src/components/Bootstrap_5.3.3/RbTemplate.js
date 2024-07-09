import React from "react";

function RbTemplate({ children, className }) {
  let templateClass = "template";
  if (className) {
    templateClass += ` ${className}`;
  }
  return <div class={templateClass}>{children}</div>;
}

export default RbTemplate;
