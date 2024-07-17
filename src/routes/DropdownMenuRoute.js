import { Link } from "react-router-dom";

function DropdownMenuRoute() {
  return (
    <>
      <h2>DropdownMenu</h2>
      <h3>Варианты использования</h3>
      <div>
        См. <Link to="/dropdownitem">DropdownItem</Link>
      </div>
    </>
  );
}

export default DropdownMenuRoute;
