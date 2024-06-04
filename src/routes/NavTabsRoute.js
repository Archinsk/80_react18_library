import RbNavTabLink from "../components/Bootstrap_5.3.3/RbNavTabLink";
import RbNavTabs from "../components/Bootstrap_5.3.3/RbNavTabs";
import RbTabContent from "../components/Bootstrap_5.3.3/RbTabContent";
import RbTabPane from "../components/Bootstrap_5.3.3/RbTabPane";

function NavTabsRoute() {
  const defaultNavTabs = {
    itemsList: [
      { id: "tab-pane-01", active: true, name: "Первая" },
      { id: "tab-pane-02", active: false, name: "Вторая" },
      {
        id: "tab-pane-03",
        active: false,
        name: "Третья (удлинненная кнопка)",
      },
    ],
  };

  return (
    <>
      <h2>NavTabs</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">
        В виде табов с пробросом пунктов в дефолтный слот
      </div>
      <RbNavTabs id="nav-tab">
        <RbNavTabLink id="nav-link-01" href="nav-home" active>
          Первая
        </RbNavTabLink>
        <RbNavTabLink id="nav-link-02" href="nav-profile">
          Вторая
        </RbNavTabLink>
        <RbNavTabLink id="nav-link-03" href="nav-contact">
          Третья
        </RbNavTabLink>
      </RbNavTabs>
      <RbTabContent id="nav-content">
        <RbTabPane id="nav-home" active="true">
          Контент 1
        </RbTabPane>
        <RbTabPane id="nav-profile">Контент 2</RbTabPane>
        <RbTabPane id="nav-contact">Контент 3</RbTabPane>
      </RbTabContent>

      <div className="use-case-title">
        В виде кнопок с пробросом пунктов в дефолтный слот
      </div>
      <RbNavTabs id="nav-tab-02" pills>
        <RbNavTabLink id="nav-link-04" href="nav-home-02" active>
          Первая
        </RbNavTabLink>
        <RbNavTabLink id="nav-link-05" href="nav-profile-02">
          Вторая
        </RbNavTabLink>
        <RbNavTabLink id="nav-link-06" href="nav-contact-02">
          Третья
        </RbNavTabLink>
      </RbNavTabs>
      <RbTabContent id="nav-content-02">
        <RbTabPane id="nav-home-02" active="true">
          Контент 4
        </RbTabPane>
        <RbTabPane id="nav-profile-02">Контент 5</RbTabPane>
        <RbTabPane id="nav-contact-02">Контент 6</RbTabPane>
      </RbTabContent>

      <div className="use-case-title">В виде кнопок c передачей массива</div>
      <RbNavTabs id="tabs-01" itemsList={defaultNavTabs.itemsList} pills />
      <RbTabContent id="tabs-01" itemsList={defaultNavTabs.itemsList}>
        <span>Контент первой вкладки</span>
        <span>Контент второй вкладки</span>
        <span>Контент третьей вкладки</span>
      </RbTabContent>

      <div className="use-case-title">С выравниванием по правому краю</div>
      <RbNavTabs
        id="tabs-02"
        itemsList={defaultNavTabs.itemsList}
        pills
        position="end"
      />
      <RbTabContent id="tabs-02" itemsList={defaultNavTabs.itemsList}>
        <span>Контент первой вкладки</span>
        <span>Контент второй вкладки</span>
        <span>Контент второй вкладки</span>
      </RbTabContent>

      <div className="use-case-title">Вертикальное расположение</div>
      <RbNavTabs
        id="tabs-03"
        itemsList={defaultNavTabs.itemsList}
        pills
        vertical
      />
      <RbTabContent id="tabs-03" itemsList={defaultNavTabs.itemsList}>
        <span>Контент первой вкладки</span>
        <span>Контент второй вкладки</span>
        <span>Контент третьей вкладки</span>
      </RbTabContent>

      <div className="use-case-title">На всю ширину</div>
      <RbNavTabs id="tabs-04" itemsList={defaultNavTabs.itemsList} pills fill />
      <RbTabContent id="tabs-04" itemsList={defaultNavTabs.itemsList}>
        <span>Контент первой вкладки</span>
        <span>Контент второй вкладки</span>
        <span>Контент третьей вкладки</span>
      </RbTabContent>

      <div className="use-case-title">
        На всю ширину с кнопками равной ширины
      </div>
      <RbNavTabs
        id="tabs-05"
        itemsList={defaultNavTabs.itemsList}
        pills
        fill
        justified
      />
      <RbTabContent id="tabs-05" itemsList={defaultNavTabs.itemsList}>
        <span>Контент первой вкладки</span>
        <span>Контент второй вкладки</span>
        <span>Контент третьей вкладки</span>
      </RbTabContent>
    </>
  );
}

export default NavTabsRoute;
