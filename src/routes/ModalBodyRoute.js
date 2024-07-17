import { Link } from "react-router-dom";

function ModalBodyRoute() {
  return (
    <>
      <h2>ModalBody</h2>
      <h3>Варианты использования</h3>
      <div>
        См. <Link to="/modal">Modal</Link>
      </div>
    </>
  );
}

export default ModalBodyRoute;
