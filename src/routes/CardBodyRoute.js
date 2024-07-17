import { Link } from "react-router-dom";

function CardBodyRoute() {
  return (
    <>
      <h2>CardBody</h2>
      <h3>Варианты использования</h3>
      <div>
        См. <Link to="/card">Card</Link>
      </div>
    </>
  );
}

export default CardBodyRoute;
