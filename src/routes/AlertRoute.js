import RbAlert from "../components/Bootstrap_5.3.3/RbAlert";

function AlertRoute() {
  return (
    <>
      <h2>Alert</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">Без пропов</div>
      <RbAlert>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </RbAlert>
      <div className="use-case-title">С темой</div>
      <RbAlert theme="danger">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </RbAlert>
      <div className="use-case-title">С кнопкой закрытия</div>
      <RbAlert theme="warning" closeButton>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </RbAlert>
      <div className="use-case-title">Стилизованный через классы</div>
      <RbAlert className="bg-info text-white border-primary border-3 rounded-pill">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </RbAlert>
    </>
  );
}

export default AlertRoute;
