// Версия 1.01 от 07.05.2024

import React from "react";
import RbButtonLink from "./RbButtonLink";
import RbButton from "./RbButton";

function RbModalButton({
  children,
  className,
  targetId,
  tag,
  theme,
  size,
  block,
  square,
  icon,
  badge,
  additionalClasses,
  withoutBtnClass,
}) {
  let modalButtonClass = "btn-modal";
  if (className) {
    modalButtonClass += ` ${className}`;
  }

  if (tag === "a") {
    return (
      <RbButtonLink
        href="#"
        role="button"
        className={modalButtonClass}
        theme={theme}
        size={size}
        block={block}
        square={square}
        icon={icon}
        withoutBtnClass={withoutBtnClass}
        additionalClasses={additionalClasses}
        dataBsToggle="modal"
        dataBsTarget={"#" + targetId}
      >
        {children}
      </RbButtonLink>
    );
  } else {
    return (
      <RbButton
        className={modalButtonClass}
        type="button"
        theme={theme}
        size={size}
        block={block}
        square={square}
        icon={icon}
        badge={badge}
        additionalClasses={additionalClasses}
        dataBsToggle="modal"
        dataBsTarget={"#" + targetId}
      >
        {children}
      </RbButton>
    );
  }
}

export default RbModalButton;
