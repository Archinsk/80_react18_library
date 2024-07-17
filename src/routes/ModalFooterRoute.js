import { Link } from "react-router-dom";

function ModalFooterRoute() {
  return (
    <>
      <h2>ModalFooter</h2>
      <h3>Варианты использования</h3>
      <div>
        См. <Link to="/modal">Modal</Link>
      </div>
    </>
  );
}

export default ModalFooterRoute;
