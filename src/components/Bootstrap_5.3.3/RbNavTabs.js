// Версия 1.01 от 04.06.2024

import React from "react";
import RbNav from "./RbNav";
import RbNavTabLink from "./RbNavTabLink";

function RbNavTabs({
  children,
  className,
  id,
  pills,
  position,
  vertical,
  fill,
  justified,
  itemsList,
}) {
  let navContent;
  if (itemsList && itemsList.length) {
    navContent = itemsList.map((navTabLink) => {
      return (
        <RbNavTabLink
          key={navTabLink.id}
          id={id ? id + "-" + navTabLink.id : navTabLink.id}
          href={id ? id + "-" + navTabLink.id : navTabLink.id}
          active={navTabLink.active}
          disabled={navTabLink.disabled}
        >
          {navTabLink.name}
        </RbNavTabLink>
      );
    });
  } else {
    navContent = children;
  }
  return (
    <RbNav
      className={className || null}
      id={id}
      type={pills ? "pills" : "tabs"}
      position={position}
      vertical={vertical}
      fill={fill}
      justified={justified}
      role="tablist"
    >
      {navContent}
    </RbNav>
  );
}

export default RbNavTabs;
