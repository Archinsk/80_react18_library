import RbButton from "../components/Bootstrap_5.3.3/RbButton";
import RbIcon from "../components/Bootstrap_5.3.3/RbIcon";
import RbNav from "../components/Bootstrap_5.3.3/RbNav";

function IconRoute() {
  const defaultNav = {
    itemsList: [
      {
        id: "nav-link-alert",
        name: "NavLink",
        type: "router-link",
        href: "/alert",
        active: false,
        disabled: false,
      },
      {
        id: "nav-link-home",
        name: "NavLink с иконкой",
        type: "router-link",
        href: "/",
        icon: "home",
        active: false,
        disabled: false,
      },
      {
        id: "nav-link-test-modal-0",
        name: "ButtonLink",
        type: "modal-link",
        href: "modal-test",
        active: false,
        disabled: false,
      },
      {
        id: "nav-link-test-modal",
        name: "ButtonLink с иконкой",
        type: "modal-link",
        href: "modal-test",
        icon: "star",
        active: false,
        disabled: false,
      },
      {
        id: "nav-link-collapse",
        name: "NavLink with Dropdown с иконкой",
        type: "router-link",
        href: "#",
        icon: "favorite",
        active: false,
        disabled: false,
        dropdown: true,
        dropdownItemsList: [
          {
            id: "dropdown-link-collapse-button",
            name: "DropdownItem",
            type: "router-link",
            href: "/collapsebutton",
            active: false,
            disabled: false,
          },
          {
            id: "dropdown-link-accordion",
            name: "DropdownItem",
            type: "router-link",
            href: "/accordion",
            active: false,
            disabled: false,
          },
          {
            id: "dropdown-link-collapse",
            name: "DropdownItem с иконкой",
            type: "router-link",
            href: "/collapse",
            active: false,
            disabled: false,
            icon: "star",
          },
        ],
      },
    ],
  };

  return (
    <>
      <h2>Icon</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">В тексте</div>
      <div>Lorem ipsum dolor.</div>
      <div>
        Lor
        <RbIcon name="favorite" />
        em ip
        <RbIcon name="star" />
        sum dolor.
      </div>
      <div className="use-case-title">В заголовке</div>
      <h2>Lorem ipsum dolor.</h2>
      <h2>
        Lor
        <RbIcon name="star" />
        em ip
        <RbIcon name="favorite" />
        sum dolor.
      </h2>
      <div className="use-case-title">Внутри кнопки</div>
      <RbButton theme="primary" icon="star" className="me-3">
        Кнопка
      </RbButton>
      <RbButton theme="primary" icon="star" square>
        Кнопка
      </RbButton>
      <div className="use-case-title">
        Внутри пунктов меню (Navlink, ButtonLink, DropdownItem)
      </div>
      <RbNav tag="ul" className="navbar-nav" itemsList={defaultNav.itemsList} />
    </>
  );
}

export default IconRoute;
