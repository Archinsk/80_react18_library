// Версия 1.01 от 04.06.2024

import React from "react";
import RbNavLink from "./RbNavLink";

function RbNavTabLink({ children, className, id, href, active, disabled }) {
  return (
    <RbNavLink
      classname={className || null}
      type="a"
      id={id + "-tab"}
      href={`#${href}`}
      active={active}
      disabled={disabled}
      ariaControls={href}
      ariaSelected={active}
      dataBsToggle="tab"
      dataBsTarget={`#${href}`}
      role="tab"
    >
      {children}
    </RbNavLink>
  );
}

export default RbNavTabLink;
