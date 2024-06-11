import { Link } from "react-router-dom";

function PaginationPageSelectorRoute() {
  return (
    <>
      <h2>PaginationPageSelector</h2>
      <h3>Варианты использования</h3>
      <div>
        См. <Link to="/pagination">Pagination</Link>
      </div>
    </>
  );
}

export default PaginationPageSelectorRoute;
