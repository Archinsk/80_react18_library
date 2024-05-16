import RbOffcanvas from "../components/Bootstrap_5.3.3/RbOffcanvas";
import RbOffcanvasButton from "../components/Bootstrap_5.3.3/RbOffcanvasButton";

function OffcanvasButtonRoute() {
  return (
    <>
      <h2>OffcanvasButton</h2>
      <h3>Варианты использования</h3>
      <RbOffcanvasButton targetId="offcanvas-01" class="btn-primary">
        OffcanvasButton
      </RbOffcanvasButton>
      <RbOffcanvas id="offcanvas-01" theme="warning" header footer>
        Содержимое Offcanvas
      </RbOffcanvas>
    </>
  );
}

export default OffcanvasButtonRoute;
