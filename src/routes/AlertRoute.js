import RbAlert from "../components/Bootstrap_5.3.3/RbAlert";

function AlertRoute() {
  return (
    <>
      <h2>Alert</h2>
      <h3>Варианты использования</h3>
      <RbAlert>Alert без пропсов</RbAlert>
      <RbAlert theme="danger">Alert c theme-color="danger"</RbAlert>
    </>
  );
}

export default AlertRoute;
