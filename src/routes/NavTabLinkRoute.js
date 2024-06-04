import RbNavTabLink from "../components/Bootstrap_5.3.3/RbNavTabLink";
import RbNavTabs from "../components/Bootstrap_5.3.3/RbNavTabs";
import RbTabContent from "../components/Bootstrap_5.3.3/RbTabContent";
import RbTabPane from "../components/Bootstrap_5.3.3/RbTabPane";

function NavTabLinkRoute() {
  return (
    <>
      <h2>NavTabLink</h2>
      <h3>Варианты использования</h3>
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
    </>
  );
}

export default NavTabLinkRoute;
