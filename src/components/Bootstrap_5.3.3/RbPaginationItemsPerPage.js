// Версия 1.01 от 13.06.2024

import React from "react";
import RbPaginationButton from "./RbPaginationButton";

function RbPaginationItemsPerPage({
  className,
  itemsPerPage,
  pageSize,
  islandButtons,
}) {
  let paginationButtons = itemsPerPage.map((valuePerPage) => {
    let buttonClass = "page-item";
    if (islandButtons) {
      buttonClass += " island-button";
    }
    if (valuePerPage === pageSize) {
      buttonClass += " active";
    }
    if (className) {
      buttonClass += ` ${className}`;
    }
    return (
      <RbPaginationButton key={valuePerPage} className={buttonClass}>
        {valuePerPage}
      </RbPaginationButton>
    );
  });
  return (
    <nav aria-label="Items per page navigation">
      <ul className="pagination mb-0">{paginationButtons}</ul>
    </nav>
  );
}

export default RbPaginationItemsPerPage;
