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
      <thead>
        <tr className={className || null}>{children}</tr>
      </thead>
    );
  } else {
    return <tr className={className || null}>{children}</tr>;
  }
}

export default RbTableRow;
