import React from "react";

function RbTableRow({ children, className, tag }) {
  if (tag === "thead") {
    return (
      <thead>
        <tr className={className || null}>{children}</tr>
      </thead>
    );
  } else if (tag === "tfoot") {
    return (
      <tfoot>
        <tr className={className || null}>{children}</tr>
      </tfoot>
    );
  } else {
    return <tr className={className || null}>{children}</tr>;
  }
}

export default RbTableRow;
