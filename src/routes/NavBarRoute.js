import RbNav from "../components/Bootstrap_5.3.3/RbNav";
import RbNavBar from "../components/Bootstrap_5.3.3/RbNavBar";
import RbOffcanvas from "../components/Bootstrap_5.3.3/RbOffcanvas";
import RbOffcanvasButton from "../components/Bootstrap_5.3.3/RbOffcanvasButton";

function NavBarRoute() {
  const defaultNavBar = {
    dark: true,
    theme: "primary",
    monochromeBrandImage: true,
    hidden: true,
    hiddenSize: "sm",
    brand: {
      href: "/",
      name: "Viewer",
      imageSrc: "images/viewer-logo.svg",
    },
    nav: {
      itemsList: [
        {
          id: "link-alert",
          name: "Alert",
          type: "router-link",
          href: "/alert",
          active: false,
          disabled: false,
        },
        {
          id: "link-form",
          name: "Form",
          type: "router-link",
          href: "/form",
          active: false,
          disabled: false,
        },
        {
          id: "link-pagination",
          name: "Pagination",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          dropdown: true,
          dropdownItemsList: [
            {
              id: "link-pagination",
              name: "Pagination",
              type: "router-link",
              href: "/pagination",
              active: true,
              disabled: false,
            },
            {
              id: "link-pagination-items-per-page",
              name: "PaginationItemsPerPage",
              type: "router-link",
              href: "/paginationitemsperpage",
              active: false,
              disabled: false,
            },
            {
              id: "link-pagination-page-selector",
              name: "PaginationPageSelector",
              type: "router-link",
              href: "/paginationpageselector",
              active: false,
              disabled: false,
            },
            {
              id: "link-pagination-button",
              name: "PaginationButton",
              type: "router-link",
              href: "/paginationbutton",
              active: false,
              disabled: true,
            },
          ],
        },
        {
          id: "link-modal",
          name: "Modal",
          type: "router-link",
          href: "/modal",
          active: true,
          disabled: false,
        },
        {
          id: "link-preloader",
          name: "Preloader",
          type: "router-link",
          href: "/preloader",
          active: false,
          disabled: true,
        },
      ],
    },
  };

  return (
    <>
      <h2>NavBar</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">
        Без пропов (только id, навигация проброшена в слот)
      </div>
      <RbNavBar id="nav-bar-01">
        <RbNav
          tag="ul"
          className="navbar-nav"
          itemsList={defaultNavBar.nav.itemsList}
        />
      </RbNavBar>
      <div className="use-case-title">
        С указанием темы (по умолчанию темный текст на светлом фоне)
      </div>
      <RbNavBar id="nav-bar-02" theme="warning">
        <RbNav
          tag="ul"
          className="navbar-nav"
          itemsList={defaultNavBar.nav.itemsList}
        />
      </RbNavBar>
      <div className="use-case-title">
        С монохромным брендом, указанием темы, темный фон (светлый текст на
        темном фоне)
      </div>
      <RbNavBar
        id="nav-bar-03"
        theme="primary"
        brand={defaultNavBar.brand}
        monochromeBrandImage
        dark
      >
        <RbNav
          tag="ul"
          className="navbar-nav"
          itemsList={defaultNavBar.nav.itemsList}
        />
      </RbNavBar>
      <div className="use-case-title">С брендом и выравниванием по центру</div>
      <RbNavBar
        id="nav-bar-04"
        theme="warning"
        brand={defaultNavBar.brand}
        justifyContent="center"
      >
        <RbNav
          tag="ul"
          className="navbar-nav"
          itemsList={defaultNavBar.nav.itemsList}
        />
      </RbNavBar>
      <div className="use-case-title">Всегда свернутая панель навигации</div>
      <RbNavBar
        id="nav-bar-05"
        theme="warning"
        brand={defaultNavBar.brand}
        hidden
      >
        <RbNav
          tag="ul"
          className="navbar-nav"
          itemsList={defaultNavBar.nav.itemsList}
        />
      </RbNavBar>
      <div className="use-case-title">
        Панель навигации, разворачивающаяся на экранах шириной 576px и более
      </div>
      <RbNavBar
        id="nav-bar-06"
        dark={defaultNavBar.dark}
        theme={defaultNavBar.theme}
        brand={defaultNavBar.brand}
        monochromeBrandImage={defaultNavBar.monochromeBrandImage}
        hidden={defaultNavBar.hidden}
        hiddenSize={defaultNavBar.hiddenSize}
      >
        <RbNav
          tag="ul"
          className="navbar-nav"
          itemsList={defaultNavBar.nav.itemsList}
        />
      </RbNavBar>
      <div className="use-case-title">
        Панель навигации, разворачивающаяся на экранах шириной 576px и более, на
        экранах шириной менее 576px разворачивается сайдбаром
      </div>
      <RbNavBar
        id="nav-bar-07"
        theme="warning"
        brand={defaultNavBar.brand}
        hidden
        hiddenSize={defaultNavBar.hiddenSize}
        offcanvas
      >
        <RbNav
          tag="ul"
          className="navbar-nav"
          itemsList={defaultNavBar.nav.itemsList}
        />
      </RbNavBar>
    </>
  );
}

export default NavBarRoute;
