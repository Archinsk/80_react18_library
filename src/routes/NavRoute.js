import RbNav from "../components/Bootstrap_5.3.3/RbNav";
import RbNavItem from "../components/Bootstrap_5.3.3/RbNavItem";
import RbNavLink from "../components/Bootstrap_5.3.3/RbNavLink";

function NavRoute() {
  const defaultNav = {
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
      {
        id: "link-pagination",
        name: "Pagination",
        type: "router-link",
        href: "",
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
    ],
  };

  const navLinks = defaultNav.itemsList.map((navLink) => {
    return (
      <RbNavLink
        key={navLink.id}
        type={navLink.type}
        href={navLink.href}
        active={navLink.active}
        disabled={navLink.disabled}
      >
        {navLink.name}
      </RbNavLink>
    );
  });

  const navItems = defaultNav.itemsList.map((navItem) => {
    return (
      <RbNavItem
        key={navItem.id}
        type={navItem.type}
        href={navItem.href}
        active={navItem.active}
        disabled={navItem.disabled}
        dropdown={navItem.dropdown}
        dropdownItemsList={navItem.dropdownItemsList}
      >
        {navItem.name}
      </RbNavItem>
    );
  });

  return (
    <>
      <h2>Nav</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">Без пропов, пункты проброшены в слот</div>
      <RbNav>{navLinks}</RbNav>
      <div className="use-case-title">Горизонтальное центрирование</div>
      <RbNav position="center" itemsList={defaultNav.itemsList} />
      <div className="use-case-title">Вертикальное расположение</div>
      <RbNav vertical itemsList={defaultNav.itemsList} />
      <div className="use-case-title">В виде табов</div>
      <RbNav type="tabs" itemsList={defaultNav.itemsList} />
      <div className="use-case-title">В виде кнопок</div>
      <RbNav type="pills" itemsList={defaultNav.itemsList} />
      <div className="use-case-title">
        В виде кнопок, занимающих все пространство
      </div>
      <RbNav type="pills" fill itemsList={defaultNav.itemsList} />
      <div className="use-case-title">
        В виде кнопок равной ширины, занимающих все пространство
      </div>
      <RbNav type="pills" justified itemsList={defaultNav.itemsList} />
      <div className="use-case-title">
        Ненумерованный список с пробросом в слот
      </div>
      <RbNav tag="ul">{navItems}</RbNav>
      <div className="use-case-title">
        Ненумерованный список со списком переданным через проп
      </div>
      <RbNav tag="ul" itemsList={defaultNav.itemsList} />
    </>
  );
}

export default NavRoute;
