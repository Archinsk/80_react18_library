import RbNavTabLink from "../components/Bootstrap_5.3.3/RbNavTabLink";
import RbNavTabs from "../components/Bootstrap_5.3.3/RbNavTabs";
import RbTabContent from "../components/Bootstrap_5.3.3/RbTabContent";
import RbTabPane from "../components/Bootstrap_5.3.3/RbTabPane";

function TabPaneRoute() {
  return (
    <>
      <h2>TabPane</h2>
      <h3>Варианты использования</h3>
      <RbNavTabs pills>
        <RbNavTabLink href="content-01">Кнопка 1</RbNavTabLink>
        <RbNavTabLink href="content-02" active>
          Кнопка 2
        </RbNavTabLink>
      </RbNavTabs>
      <RbTabContent>
        <RbTabPane id="content-01">Неактивная по умолчанию вкладка</RbTabPane>
        <RbTabPane id="content-02" active>
          Активная по умолчанию вкладка
        </RbTabPane>
      </RbTabContent>
    </>
  );
}

export default TabPaneRoute;
