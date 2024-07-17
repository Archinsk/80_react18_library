import React from "react";

function RbTableCell({ children, className, tag, colspan, rowspan, scope }) {
  if (tag === "th") {
    return (
      <th
        colSpan={colspan || null}
        rowSpan={rowspan || null}
        scope={scope || null}
        className={className || null}
      >
        {children}
      </th>
    );
  } else {
    return (
      <td
        colSpan={colspan || null}
        rowSpan={rowspan || null}
        scope={scope || null}
        className={className || null}
      >
        {children}
      </td>
    );
  }
}

export default RbTableCell;
