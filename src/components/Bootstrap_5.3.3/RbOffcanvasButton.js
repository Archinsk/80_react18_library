// Версия 1.01 от 07.05.2024

import React from "react";
import RbButton from "./RbButton";

function RbOffcanvasButton({
  children,
  className,
  targetId,
  theme,
  size,
  block,
  square,
  icon,
}) {
  let offcanvasButtonClass = "btn-offcanvas";
  if (className) {
    offcanvasButtonClass += ` ${className}`;
  }

  return (
    <RbButton
      className={offcanvasButtonClass}
      theme={theme}
      size={size}
      block={block}
      square={square}
      icon={icon}
      dataBsToggle="offcanvas"
      dataBsTarget={"#" + targetId}
      ariaControls={targetId}
    >
      {children}
    </RbButton>
  );
}

export default RbOffcanvasButton;
