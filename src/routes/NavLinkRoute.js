import RbNav from "../components/Bootstrap_5.3.3/RbNav";
import RbNavLink from "../components/Bootstrap_5.3.3/RbNavLink";
import RbTabs from "../components/Bootstrap_5.3.3/RbTabs";

function NavLinkRoute() {
  const defaultNav = {
    itemsList: [
      {
        id: "link-modal",
        name: "Роутер-ссылка",
        type: "router-link",
        href: "/modal",
        active: true,
        disabled: false,
      },
      {
        id: "link-modal-test",
        name: "Переключатель модалки",
        type: "modal-link",
        href: "modal-test",
        active: false,
        disabled: false,
      },
      {
        id: "link-pagination",
        name: "Выпадающий список",
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

  const defaultTabs = {
    itemsList: [
      { id: "tab-pane-01", active: false, name: "Кнопка-1" },
      { id: "tab-pane-02", active: true, name: "Кнопка-2" },
      {
        id: "tab-pane-03",
        active: false,
        name: "Кнопка-3",
      },
    ],
  };

  return (
    <>
      <h2>NavLink</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">
        С указанием типа (ссылка-роутер, обычная, активатор Bootstrap-действия)
      </div>
      <RbNav>
        <RbNavLink href="/nav">Ссылка-роутер</RbNavLink>
        <RbNavLink type="a" href="https://ya.ru">
          Обычная ссылка
        </RbNavLink>
        <RbNavLink href="/nav" disabled>
          Отключенная
        </RbNavLink>
        <RbNavLink href="/nav" icon="favorite">
          С иконкой
        </RbNavLink>
      </RbNav>
      <div className="use-case-title">Стилизованная классами</div>
      <RbNav>
        <RbNavLink href="/nav" className="bg-info-subtle">
          Ссылка-роутер
        </RbNavLink>
        <RbNavLink
          type="a"
          href="https://ya.ru"
          className="text-danger border border-2"
        >
          Обычная ссылка
        </RbNavLink>
        <RbNavLink
          href="/nav"
          disabled
          className="bg-dark-subtle border border-dark border-2 rounded-3"
        >
          Отключенная
        </RbNavLink>
      </RbNav>
      <div className="use-case-title">
        С указанием Bootstrap-действия и его цели (выпадающий список, модальное
        окно)
      </div>
      <RbNav tag="ul" itemsList={defaultNav.itemsList} />
      <div className="use-case-title">
        С указанием Bootstrap-действия (tab-вкладка)
      </div>
      <RbTabs id="tabs-01" itemsList={defaultTabs.itemsList}>
        <span>Контент первой вкладки</span>
        <span>Контент второй вкладки</span>
        <span>Контент третьей вкладки</span>
      </RbTabs>
    </>
  );
}

export default NavLinkRoute;
