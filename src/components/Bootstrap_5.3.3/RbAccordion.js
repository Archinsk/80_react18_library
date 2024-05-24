// Версия 1.01 от 22.05.2024

import React from "react";
import RbAccordionItem from "./RbAccordionItem";

function RbAccordion({
  children,
  className,
  id,
  noBorder,
  itemsList,
  multiple,
  custom,
}) {
  let accordionClass = "accordion";
  if (noBorder) {
    accordionClass += " accordion-flush";
  }
  if (className) {
    accordionClass += ` ${className}`;
  }
  if (!custom && itemsList.length) {
    const accordionItemsList = itemsList.map((item, index) => {
      return (
        <RbAccordionItem
          id={!multiple ? id : null}
          title={item.title}
          content={item.content}
          index={index + 1}
        />
      );
    });
    return (
      <div className={accordionClass} id={id}>
        {accordionItemsList}
      </div>
    );
  }
  if (custom) {
    return (
      <div className={accordionClass} id={id}>
        {children}
      </div>
    );
  }
  return null;
}

export default RbAccordion;
