import RbTabs from "../components/Bootstrap_5.3.3/RbTabs";

function TabsRoute() {
  const defaultTabs = {
    itemsList: [
      { id: "tab-pane-01", active: false, name: "Кнопка-1" },
      { id: "tab-pane-02", active: true, name: "Кнопка-2" },
      {
        id: "tab-pane-03",
        active: false,
        name: "Кнопка-3 (удлинненная)",
      },
    ],
  };

  return (
    <>
      <h2>Tabs</h2>
      <h3>Варианты использования</h3>

      <div className="use-case-title">Табы</div>
      <RbTabs id="tabs-01" itemsList={defaultTabs.itemsList}>
        <span>Контент первой вкладки</span>
        <span>Контент второй вкладки</span>
        <span>Контент третьей вкладки</span>
      </RbTabs>

      <div className="use-case-title">Кнопки</div>
      <RbTabs id="tabs-02" itemsList={defaultTabs.itemsList} pills>
        <span>Контент первой вкладки</span>
        <span>Контент второй вкладки</span>
        <span>Контент третьей вкладки</span>
      </RbTabs>

      <div className="use-case-title">Кнопки на всю ширину</div>
      <RbTabs id="tabs-03" itemsList={defaultTabs.itemsList} pills fill>
        <span>Контент первой вкладки</span>
        <span>Контент второй вкладки</span>
        <span>Контент третьей вкладки</span>
      </RbTabs>

      <div className="use-case-title">Кнопки равной ширины на всю ширину</div>
      <RbTabs
        id="tabs-04"
        itemsList={defaultTabs.itemsList}
        pills
        fill
        justified
      >
        <span>Контент первой вкладки</span>
        <span>Контент второй вкладки</span>
        <span>Контент третьей вкладки</span>
      </RbTabs>

      <div className="use-case-title">Вертикальные кнопки</div>
      <RbTabs id="tabs-05" itemsList={defaultTabs.itemsList} pills vertical>
        <span>Контент первой вкладки</span>
        <span>Контент второй вкладки</span>
        <span>Контент третьей вкладки</span>
      </RbTabs>

      <div className="use-case-title">Выравнивание по центру</div>
      <RbTabs
        id="tabs-06"
        itemsList={defaultTabs.itemsList}
        pills
        position="center"
      >
        <span>Контент первой вкладки</span>
        <span>Контент второй вкладки</span>
        <span>Контент третьей вкладки</span>
      </RbTabs>
    </>
  );
}

export default TabsRoute;
