import { Link } from "react-router-dom";

function ButtonLinkRoute() {
  return (
    <>
      <h2>Nav</h2>
      <h3>Варианты использования</h3>
      <div>
        См. <Link to="/button">Button</Link>
      </div>
    </>
  );
}

export default ButtonLinkRoute;
