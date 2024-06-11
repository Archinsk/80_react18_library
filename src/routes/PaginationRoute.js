import RbPagination from "../components/Bootstrap_5.3.3/RbPagination";

function PaginationRoute() {
  const defaultPagination = {
    itemsTotal: 10,
    page: 1,
    pageSize: 5,
    itemsPerPage: [3, 5, 10],
  };

  return (
    <>
      <h2>Pagination</h2>
      <h3>Варианты использования</h3>
      <div>Объединенные кнопки</div>
      <RbPagination
        itemsTotal={defaultPagination.itemsTotal}
        page={defaultPagination.page}
        pageSize={defaultPagination.pageSize}
        itemsPerPage={defaultPagination.itemsPerPage}
      />
      <div>Раздельные кнопки</div>
      <RbPagination
        itemsTotal={defaultPagination.itemsTotal}
        page={defaultPagination.page}
        pageSize={defaultPagination.pageSize}
        itemsPerPage={defaultPagination.itemsPerPage}
        islandButtons
      />
    </>
  );
}

export default PaginationRoute;
