// Версия 1.01 от 27.04.2024

import React from "react";
import RbButton from "./RbButton";

function RbCollapseButton({
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
      className="btn-collapse"
      type="button"
      theme={theme}
      size={size}
      block={block}
      square={square}
      icon={icon}
      dataBsToggle="collapse"
      dataBsTarget={"#" + targetId}
      ariaExpanded="false"
      ariaControls={targetId}
    >
      {children}
    </RbButton>
  );
}

export default RbCollapseButton;
