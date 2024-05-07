// Версия 1.01 от 07.05.2024

import React from "react";
import RbButton from "./RbButton";

function RbOffcanvasButton({
  children,
  targetId,
  theme,
  size,
  block,
  square,
  icon,
}) {
  return (
    <RbButton
      type="button"
      theme={theme}
      size={size}
      block={block}
      square={square}
      icon={icon}
      dataBsToggle="offcanvas"
      dataBsTarget={targetId}
    >
      {children}
    </RbButton>
  );
}

export default RbOffcanvasButton;
