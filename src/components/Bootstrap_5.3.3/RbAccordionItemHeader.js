// Версия 1.01 от 22.05.2024

import React from "react";
import RbCollapseButton from "./RbCollapseButton";

function RbAccordionItemHeader({ children, id, index }) {
  return (
    <h2 className="accordion-header">
      <RbCollapseButton
        targetId={id + "-collapse-" + index}
        withoutBtnClass
        className="accordion-button collapsed"
      >
        {children}
      </RbCollapseButton>
    </h2>
  );
}

export default RbAccordionItemHeader;
