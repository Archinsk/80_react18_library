import { Link } from "react-router-dom";

function CardFooterRoute() {
  return (
    <>
      <h2>CardFooter</h2>
      <h3>Варианты использования</h3>
      <div>
        См. <Link to="/card">Card</Link>
      </div>
    </>
  );
}

export default CardFooterRoute;
