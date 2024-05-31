import RbNavTabLink from "../components/Bootstrap_5.3.3/RbNavTabLink";
import RbNavTabs from "../components/Bootstrap_5.3.3/RbNavTabs";
import RbTabContent from "../components/Bootstrap_5.3.3/RbTabContent";
import RbTabPane from "../components/Bootstrap_5.3.3/RbTabPane";

function TabContentRoute() {
  const content = {
    itemsList: [
      { id: "tab-pane-01", active: false },
      { id: "tab-pane-02", active: false },
      {
        id: "tab-pane-03",
        active: true,
      },
    ],
  };

  const navTabLinks = content.itemsList.map((tabPane, index) => {
    return (
      <RbNavTabLink key={index} href={tabPane.id}>
        Кнопка-0{index + 1}
      </RbNavTabLink>
    );
  });

  return (
    <>
      <h2>TabContent</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">
        Без передачи массива, с пробросом вкладок в дефолтный слот
      </div>
      <RbNavTabs pills>
        <RbNavTabLink href="content-11">Кнопка 1</RbNavTabLink>
        <RbNavTabLink href="content-12">Кнопка 2</RbNavTabLink>
      </RbNavTabs>
      <RbTabContent>
        <RbTabPane id="content-11">Неактивная по умолчанию вкладка</RbTabPane>
        <RbTabPane id="content-12" active>
          Активная по умолчанию вкладка
        </RbTabPane>
      </RbTabContent>
      <div className="use-case-title">
        С передачей массива и пробросом контента в соответствующие
        идентификаторам панелей слоты
      </div>
      <RbNavTabs pills>{navTabLinks}</RbNavTabs>
      <RbTabContent itemsList={content.itemsList}>
        <span>Контент первой вкладки</span>
        <span>Контент второй вкладки</span>
        <span>Контент третьей вкладки</span>
      </RbTabContent>
    </>
  );
}

export default TabContentRoute;
