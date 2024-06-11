import React from "react";
import RbPaginationItemsPerPage from "./RbPaginationItemsPerPage";
import RbPaginationPageSelector from "./RbPaginationPageSelector";

function RbPagination({
  children,
  className,
  itemsPerPage,
  pageSize,
  itemsTotal,
  page,
  islandButtons,
}) {
  const pages = Math.ceil(itemsTotal / pageSize);

  return (
    <div
      v-if="itemsTotal > itemsPerPage[0]"
      class="d-flex justify-content-between align-items-center"
    >
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
          v-if=""
          pages={pages}
          activePage={page}
          islandButtons={islandButtons}
        />
      ) : null}
    </div>
  );
}

export default RbPagination;
