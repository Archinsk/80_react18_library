// Версия 1.01 от 13.06.2024

import React from "react";
import RbPaginationItemsPerPage from "./RbPaginationItemsPerPage";
import RbPaginationPageSelector from "./RbPaginationPageSelector";

function RbPagination({
  className,
  itemsPerPage,
  pageSize,
  itemsTotal,
  page,
  islandButtons,
}) {
  const pages = Math.ceil(itemsTotal / pageSize);

  let paginationClass = "d-flex justify-content-between align-items-center";
  if (className) {
    paginationClass += ` ${className}`;
  }

  if (itemsTotal > itemsPerPage[0]) {
    return (
      <div className={paginationClass}>
        <RbPaginationItemsPerPage
          itemsPerPage={itemsPerPage}
          pageSize={pageSize}
          islandButtons={islandButtons}
          className="d-none d-lg-block"
        />
        <div>
          {pageSize * (page - 1) + 1} -{" "}
          {page === pages ? itemsTotal : pageSize * page} из {itemsTotal}
        </div>
        {itemsTotal > pageSize ? (
          <RbPaginationPageSelector
            pages={pages}
            activePage={page}
            islandButtons={islandButtons}
          />
        ) : null}
      </div>
    );
  } else {
    return null;
  }
}

export default RbPagination;
