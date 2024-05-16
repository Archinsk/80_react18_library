import RbCollapse from "../components/Bootstrap_5.3.3/RbCollapse";
import RbCollapseButton from "../components/Bootstrap_5.3.3/RbCollapseButton";

function CollapseRoute() {
  return (
    <>
      <h2>Collapse</h2>
      <h3>Варианты использования</h3>
      <RbCollapseButton targetId="notificationCollapse" theme="primary">
        Детали
      </RbCollapseButton>
      <RbCollapse id="notificationCollapse">
        Содержимое с детальной информацией
      </RbCollapse>
    </>
  );
}

export default CollapseRoute;
