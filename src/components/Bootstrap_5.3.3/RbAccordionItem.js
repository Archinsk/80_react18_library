// Версия 1.01 от 22.05.2024

import React from "react";
import RbAccordionItemHeader from "./RbAccordionItemHeader";
import RbAccordionItemBody from "./RbAccordionItemBody";

function RbAccordionItem({ id, title, content, index }) {
  return (
    <div className="accordion-item">
      <RbAccordionItemHeader id={id} index={index}>
        {title ? title : ""}
      </RbAccordionItemHeader>
      <RbAccordionItemBody id={id} index={index}>
        {content ? content : ""}
      </RbAccordionItemBody>
    </div>
  );
}

export default RbAccordionItem;
