import React from "react";

function RbTableCell({ children, className, tag, colspan, rowspan, scope }) {
  const Tag = tag === "th" ? "th" : "td";

  return (
    <Tag
      colSpan={colspan || null}
      rowSpan={rowspan || null}
      scope={scope || null}
      className={className || null}
    >
      {children}
    </Tag>
  );
}

export default RbTableCell;
