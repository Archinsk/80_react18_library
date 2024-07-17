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

  if (custom) {
    return <table>{children}</table>;
  } else if (tableData) {
    const rows = tableData.map((rowData, index) => {
      const cells = rowData.map((cellData, index) => {
        return (
          <RbTableCell
            tag={cellData.tag}
            colspan={cellData.colspan}
            rowspan={cellData.rowspan}
            scope={cellData.scope}
            key={index}
          >
            {cellData.content}
          </RbTableCell>
        );
      });
      return <RbTableRow key={index}>{cells}</RbTableRow>;
    });
    return (
      <RbTable
        striped={striped}
        hover={hover}
        bordered={bordered}
        className={tableClass}
      >
        <tbody>{rows}</tbody>
      </RbTable>
    );
  } else {
    return null;
  }
}

export default RbTable;
