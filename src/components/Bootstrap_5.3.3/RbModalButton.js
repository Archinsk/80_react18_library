import React from "react";
//import "./RbModalButton.scss";
import RbButtonLink from "./RbButtonLink";
import RbButton from "./RbButton";

function RbModalButton({
  children,
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
  if (tag === "a") {
    return (
      <RbButtonLink
        href="#"
        role="button"
        className="btn-modal"
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
        className="btn-modal"
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
