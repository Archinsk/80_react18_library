// Версия 1.01 от 22.05.2024

import React from "react";
import RbCollapse from "./RbCollapse";

function RbAccordionItemBody({ children, id, index }) {
  return (
    <RbCollapse
      id={id + "-collapse-" + index}
      accordionId={id}
      className="accordion-collapse"
    >
      <div className="accordion-body">{children}</div>
    </RbCollapse>
  );
}

export default RbAccordionItemBody;
