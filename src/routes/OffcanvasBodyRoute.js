import RbOffcanvas from "../components/Bootstrap_5.3.3/RbOffcanvas";
import RbOffcanvasButton from "../components/Bootstrap_5.3.3/RbOffcanvasButton";

function OffcanvasBodyRoute() {
  return (
    <>
      <h2>OffcanvasBody</h2>
      <h3>Варианты использования</h3>
      <RbOffcanvasButton targetId="offcanvas-01" theme="primary">
        Простейший сайдбар
      </RbOffcanvasButton>
      <RbOffcanvas id="offcanvas-01">Простой слот без параметров</RbOffcanvas>
    </>
  );
}

export default OffcanvasBodyRoute;
