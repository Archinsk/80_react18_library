import RbNav from "../components/Bootstrap_5.3.3/RbNav";
import RbNavBar from "../components/Bootstrap_5.3.3/RbNavBar";

function NavBarRoute() {
  const defaultNavBar = {
    dark: true,
    theme: "primary",
    scroll: false,
    monochromeBrandImage: true,
    expand: true,
    expandSize: "sm",
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
      <div>Без пропов (только id)</div>
      <RbNavBar id="nav-bar-01">
        <RbNav
          tag="ul"
          className="navbar-nav"
          itemsList={defaultNavBar.nav.itemsList}
        />
      </RbNavBar>
      <div>С указанием темы фона (темный текст на светлом фоне)</div>
      <RbNavBar id="nav-bar-02" theme="warning">
        <RbNav
          tag="ul"
          className="navbar-nav"
          itemsList={defaultNavBar.nav.itemsList}
        />
      </RbNavBar>
      <div>
        С брендом, указанием темы фона, темный фон (светлый текст на темном
        фоне)
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
      <div>С прокруткой на малых экранах</div>
      <RbNavBar id="nav-bar-04">
        <RbNav
          tag="ul"
          scroll
          className="navbar-nav"
          itemsList={defaultNavBar.nav.itemsList}
        />
      </RbNavBar>
      <div>Несворачивающаяся панель, без коллапс-кнопки</div>
      <RbNavBar
        id="nav-bar-05"
        theme="warning"
        brand={defaultNavBar.brand}
        withoutToggler
        expand
      >
        <RbNav
          tag="ul"
          className="navbar-nav"
          itemsList={defaultNavBar.nav.itemsList}
        />
      </RbNavBar>
      <div>Несворачивающаяся панель с выравниванием по центру</div>
      <RbNavBar
        id="nav-bar-06"
        theme="warning"
        brand={defaultNavBar.brand}
        withoutToggler
        expand
        justifyContent="center"
      >
        <RbNav
          tag="ul"
          className="navbar-nav"
          itemsList={defaultNavBar.nav.itemsList}
        />
      </RbNavBar>
      <div>Панель, сворачивающаяся на малых экранах</div>
      <RbNavBar
        id="nav-bar-07"
        dark={defaultNavBar.dark}
        theme={defaultNavBar.theme}
        scroll={defaultNavBar.scroll}
        brand={defaultNavBar.brand}
        monochromeBrandImage={defaultNavBar.monochromeBrandImage}
        expand={defaultNavBar.expand}
        expandSize={defaultNavBar.expandSize}
      >
        <RbNav
          tag="ul"
          className="navbar-nav"
          itemsList={defaultNavBar.nav.itemsList}
        />
      </RbNavBar>
      <div>Разворачивающаяся боковой панелью на малых экранах (доделать)</div>
      <RbNavBar id="nav-bar-08" theme="warning" expand without-toggler>
        <vb-offcanvas
          id="offcanvas-01"
          expandSize="sm"
          theme="warning"
          header
          noEffectPoint="sm"
        >
          <RbNav
            tag="ul"
            className="navbar-nav"
            itemsList={defaultNavBar.nav.itemsList}
          />
        </vb-offcanvas>
        <vb-offcanvas-button
          targetId="offcanvas-01"
          className="btn-light d-sm-none"
        >
          Off
        </vb-offcanvas-button>
      </RbNavBar>
    </>
  );
}

export default NavBarRoute;
