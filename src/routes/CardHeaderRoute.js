import { Link } from "react-router-dom";

function CardHeaderRoute() {
  return (
    <>
      <h2>CardHeader</h2>
      <h3>Варианты использования</h3>
      <div>
        См. <Link to="/card">Card</Link>
      </div>
    </>
  );
}

export default CardHeaderRoute;
