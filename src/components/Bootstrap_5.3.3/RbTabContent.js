// Версия 1.01 от 31.05.2024

import React from "react";
import RbTabPane from "./RbTabPane";

function RbTabContent({ children, className, id, itemsList }) {
  let tabContentClass = "tab-content";
  if (className) {
    tabContentClass += ` ${className}`;
  }
  let tabPanes = null;
  if (itemsList && itemsList.length) {
    tabPanes = itemsList.map((tabPane) => {
      return (
        <RbTabPane
          key={tabPane.id}
          id={id ? id + "-" + tabPane.id : tabPane.id}
          active={tabPane.active}
        ></RbTabPane>
      );
    });
  }

  return (
    <div className={tabContentClass}>
      {itemsList && itemsList.length ? tabPanes : children}
    </div>
  );
}

export default RbTabContent;
