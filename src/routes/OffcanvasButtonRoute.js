import RbOffcanvas from "../components/Bootstrap_5.3.3/RbOffcanvas";
import RbOffcanvasButton from "../components/Bootstrap_5.3.3/RbOffcanvasButton";

function OffcanvasButtonRoute() {
  return (
    <>
      <h2>OffcanvasButton</h2>
      <h3>Варианты использования</h3>
      <RbOffcanvasButton targetId="offcanvas01" theme="primary">
        OffcanvasButton
      </RbOffcanvasButton>
      <RbOffcanvas id="offcanvas01" theme="warning" title="Заголовок">
        Содержимое Offcanvas
      </RbOffcanvas>
    </>
  );
}

export default OffcanvasButtonRoute;
