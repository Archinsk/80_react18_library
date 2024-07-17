import { Link } from "react-router-dom";

function ModalButtonRoute() {
  return (
    <>
      <h2>ModalButton</h2>
      <h3>Варианты использования</h3>
      <div>
        См. <Link to="/modal">Modal</Link>
      </div>
    </>
  );
}

export default ModalButtonRoute;
