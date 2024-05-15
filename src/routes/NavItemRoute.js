import RbNavItem from "../components/Bootstrap_5.3.3/RbNavItem";

function NavItemRoute() {
  const defaultDropdownItemsList = [
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
  ];

  return (
    <>
      <h2>NavItem</h2>
      <h3>Варианты использования</h3>
      <div>Обычная ссылка</div>
      <ul className="nav">
        <RbNavItem type="a" href="https://ya.ru">
          Яндекс
        </RbNavItem>
      </ul>
      <div>Ссылка-роутер</div>
      <ul className="nav">
        <RbNavItem href="/nav">Страница Nav</RbNavItem>
      </ul>
      <div>Отключенная</div>
      <ul className="nav">
        <RbNavItem href="/nav" disabled>
          Отключенная
        </RbNavItem>
      </ul>
      <div>Выпадающий список</div>
      <ul className="nav">
        <RbNavItem
          type="a"
          href="https://ya.ru"
          dropdown
          dropdownItemsList={defaultDropdownItemsList}
        >
          Выбрать
        </RbNavItem>
      </ul>
    </>
  );
}

export default NavItemRoute;
