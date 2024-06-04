// Версия 1.01 от 04.06.2024

import React from "react";
import RbNavTabs from "./RbNavTabs";
import RbTabContent from "./RbTabContent";
import RbTabPane from "./RbTabPane";

function RbTabs({
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
  let navContent = null;
  if (itemsList && itemsList.length) {
    navContent = itemsList.map((tabPane, index) => {
      return (
        <RbTabPane
          key={tabPane.id}
          id={id ? id + "-" + tabPane.id : tabPane.id}
          active={tabPane.active}
        >
          {children[index]}
        </RbTabPane>
      );
    });
  } else {
    navContent = children;
  }

  return (
    <div className={className || null}>
      <RbNavTabs
        id={id}
        itemsList={itemsList}
        pills={pills}
        position={position}
        vertical={vertical}
        fill={fill}
        justified={justified}
      />
      <RbTabContent id={id}>{navContent}</RbTabContent>
    </div>
  );
}

export default RbTabs;
