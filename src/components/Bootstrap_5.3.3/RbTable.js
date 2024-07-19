import React from "react";
import RbTableRow from "./RbTableRow";
import RbTableCell from "./RbTableCell";

function RbTable({
  children,
  className,
  tableData,
  striped,
  hover,
  bordered,
  custom,
}) {
  let tableClass = "table";
  if (className) {
    tableClass += ` ${className}`;
  }
  if (striped) {
    tableClass += " table-striped";
  }
  if (hover) {
    tableClass += " table-hover";
  }
  if (bordered) {
    tableClass += " table-bordered";
  }

  console.log(tableData);
  if (custom) {
    return <table className={tableClass}>{children}</table>;
  } else if (tableData) {
    const rows = tableData.map((rowData, index) => {
      const cells = rowData.map((cellData, index) => {
        console.log(cellData);
        return (
          <RbTableCell
            tag={cellData.tag || "td"}
            colspan={cellData.colspan || null}
            rowspan={cellData.rowspan || null}
            scope={cellData.scope || null}
            key={index}
          >
            {cellData.content}
          </RbTableCell>
        );
      });
      return <RbTableRow key={index}>{cells}</RbTableRow>;
    });
    console.log(rows);
    return (
      <table
        striped={striped}
        hover={hover}
        bordered={bordered}
        className={tableClass}
      >
        <tbody>{rows}</tbody>
      </table>
    );
  } else {
    return null;
  }
}

export default RbTable;
