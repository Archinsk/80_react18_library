import { Link } from "react-router-dom";

function PaginationItemsPerPageRoute() {
  return (
    <>
      <h2>PaginationItemsPerPage</h2>
      <h3>Варианты использования</h3>
      <div>
        См. <Link to="/pagination">Pagination</Link>
      </div>
    </>
  );
}

export default PaginationItemsPerPageRoute;
