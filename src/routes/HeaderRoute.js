import RbHeader from "../components/Bootstrap_5.3.3/RbHeader";

function HeaderRoute() {
  const defaultNavBar = {
    brand: {
      href: "/",
      name: "Brand Name",
      imageSrc: "images/iss_logo.svg",
    },
    nav: {
      itemsList: [
        {
          id: "nav-link-home",
          name: "Home",
          type: "router-link",
          href: "/",
          active: false,
          disabled: false,
          icon: "home",
          badge: {
            className: "rounded-pill ms-2",
            theme: "danger",
            text: 25,
          },
        },
        {
          id: "nav-link-alert",
          name: "Alert",
          type: "router-link",
          href: "/alert",
          active: false,
          disabled: false,
        },
        {
          id: "nav-link-card",
          name: "Card",
          type: "router-link",
          href: "/card",
          active: false,
          disabled: false,
        },
        {
          id: "nav-link-collapse",
          name: "Collapse",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          icon: "",
          badge: {
            className: "rounded-pill ms-2",
            theme: "danger",
            text: 25,
          },
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-collapse",
              name: "Collapse",
              type: "router-link",
              href: "/collapse",
              icon: "done",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-collapse-button",
              name: "CollapseButton",
              type: "router-link",
              href: "/collapsebutton",
              icon: "done",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-accordion",
              name: "Accordion",
              type: "router-link",
              href: "/accordion",
              active: false,
              disabled: false,
              icon: "",
              badge: {
                className: "rounded-pill ms-2",
                theme: "danger",
                text: 25,
              },
            },
          ],
        },
        {
          id: "nav-link-filter",
          name: "Filter",
          type: "router-link",
          href: "/filter",
          active: false,
          disabled: false,
        },
        {
          id: "nav-link-form",
          name: "Form",
          type: "router-link",
          href: "/form",
          active: false,
          disabled: false,
        },
        {
          id: "nav-link-form-components",
          name: "FormComponents",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-select",
              name: "Select",
              type: "router-link",
              href: "/select",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-checkbox",
              name: "Checkbox",
              type: "router-link",
              href: "/checkbox",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-checkboxes-group",
              name: "CheckboxesGroup",
              type: "router-link",
              href: "/checkboxesgroup",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-radio-group",
              name: "RadioGroup",
              type: "router-link",
              href: "/radiogroup",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-date-range",
              name: "DateRange",
              type: "router-link",
              href: "/daterange",
              active: false,
              disabled: false,
            },
            {
              id: "nav-link-form-components3",
              name: "TestLevel3",
              type: "router-link",
              href: "#",
              active: false,
              disabled: false,
              icon: "folder",
              badge: {
                className: "rounded-pill ms-2",
                theme: "danger",
                text: 25,
              },
              dropdown: true,
              dropdownItemsList: [
                {
                  id: "dropdown-link-input",
                  name: "Input",
                  type: "router-link",
                  href: "/input",
                  active: false,
                  disabled: false,
                },
                {
                  id: "dropdown-link-textarea",
                  name: "Textarea",
                  type: "router-link",
                  href: "/textarea",
                  active: false,
                  disabled: false,
                },
              ],
            },
          ],
        },
        {
          id: "nav-link-items-list",
          name: "ItemsList",
          type: "router-link",
          href: "/itemslist",
          active: false,
          disabled: false,
        },
        {
          id: "nav-link-modal",
          name: "Modal",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-modal",
              name: "Modal",
              type: "router-link",
              href: "/modal",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-modal-button",
              name: "ModalButton",
              type: "router-link",
              href: "/modalbutton",
              active: false,
              disabled: false,
              icon: "done",
            },
          ],
        },
        {
          id: "nav-link-nav",
          name: "Nav",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          icon: "done",
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-nav",
              name: "Nav",
              type: "router-link",
              href: "/nav",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-nav-item",
              name: "NavItem",
              type: "router-link",
              href: "/navitem",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-nav-link",
              name: "NavLink",
              type: "router-link",
              href: "/navlink",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-nav-dropdown-item",
              name: "DropdownItem",
              type: "router-link",
              href: "/dropdownitem",
              icon: "done",
              active: false,
              disabled: false,
            },
          ],
        },
        {
          id: "nav-link-pagination",
          name: "Pagination",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-pagination",
              name: "Pagination",
              type: "router-link",
              href: "/pagination",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-pagination-items-per-page",
              name: "PaginationItemsPerPage",
              type: "router-link",
              href: "/paginationitemsperpage",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-pagination-page-selector",
              name: "PaginationPageSelector",
              type: "router-link",
              href: "/paginationpageselector",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-pagination-button",
              name: "PaginationButton",
              type: "router-link",
              href: "/paginationbutton",
              active: false,
              disabled: false,
            },
          ],
        },
        {
          id: "nav-link-preloader",
          name: "Preloader",
          type: "router-link",
          href: "/preloader",
          active: false,
          disabled: false,
        },
        {
          id: "nav-link-tabs",
          name: "Tab",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-nav-tabs",
              name: "NavTabs",
              type: "router-link",
              href: "/navtabs",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-nav-tab-link",
              name: "NavTabLink",
              type: "router-link",
              href: "/navtablink",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-tab-content",
              name: "TabContent",
              type: "router-link",
              href: "/tabcontent",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-tab-pane",
              name: "TabPane",
              type: "router-link",
              href: "/tabpane",
              active: false,
              disabled: false,
            },
          ],
        },
        {
          id: "nav-link-transition",
          name: "Transition",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-transition",
              name: "Transition",
              type: "router-link",
              href: "/transition",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-transition-group",
              name: "TransitionGroup",
              type: "router-link",
              href: "/transitiongroup",
              active: false,
              disabled: false,
            },
          ],
        },
        {
          id: "nav-link-nav-bar",
          name: "NavBar",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          icon: "done",
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-nav-bar",
              name: "NavBar",
              type: "router-link",
              href: "/navbar",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-nav-bar-brand",
              name: "NavBarBrand",
              type: "router-link",
              href: "/navbarbrand",
              active: false,
              disabled: false,
              icon: "done",
            },
          ],
        },
        {
          id: "nav-link-offcanvas",
          name: "Offcanvas",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          icon: "done",
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-offcanvas",
              name: "Offcanvas",
              type: "router-link",
              href: "/offcanvas",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-offcanvas-button",
              name: "OffcanvasButton",
              type: "router-link",
              href: "/offcanvasbutton",
              icon: "done",
              active: false,
              disabled: false,
            },
          ],
        },
        {
          id: "nav-link-header",
          name: "Header",
          type: "router-link",
          href: "/header",
          active: false,
          disabled: false,
        },
        {
          id: "nav-link-icon",
          name: "Icon",
          type: "router-link",
          href: "/icon",
          icon: "done",
          active: false,
          disabled: false,
        },
        {
          id: "nav-link-button",
          name: "Button",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          icon: "done",
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-button",
              name: "Button",
              type: "router-link",
              href: "/button",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-button-link",
              name: "ButtonLink",
              type: "router-link",
              href: "/buttonlink",
              active: false,
              disabled: false,
              icon: "done",
            },
          ],
        },
        {
          id: "nav-link-badge",
          name: "Badge",
          type: "router-link",
          href: "/badge",
          icon: "done",
          active: false,
          disabled: false,
        },
        {
          id: "nav-link-test-modal",
          name: "Test Modal",
          type: "modal-link",
          href: "modal-test",
          icon: "star",
          active: false,
          disabled: false,
        },
        {
          id: "nav-link-test-icon",
          name: "Test Icon",
          type: "modal-link",
          href: "modal-test",
          active: false,
          disabled: false,
          icon: "favorite",
          additionalClasses: {
            navItem: null,
            navLink: "btn-square-xl btn-outline-light",
          },
        },
        {
          id: "nav-link-test-badge",
          name: "Test Badge",
          type: "modal-link",
          href: "modal-test",
          active: false,
          disabled: false,
          icon: "mail",
          additionalClasses: {
            navItem: null,
            navLink: "btn-square-xl btn-outline-light",
          },
          badge: {
            className: "rounded-pill ms-2",
            theme: "danger",
            text: 25,
          },
        },
      ],
    },
  };

  return (
    <>
      <h2>Header</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">
        Дефолтный, без пропов (занимает дефолтную высоту)
      </div>
      <RbHeader />
      <div className="use-case-title">Дефолтный, с темой</div>
      <RbHeader theme="info" />
      <div className="use-case-title">
        Дефолтный, с брендом, без панели навигации
      </div>
      <RbHeader id="header-01" brand={defaultNavBar.brand} />
      <div className="use-case-title">С навигацией, без бренда</div>
      <RbHeader
        id="header-02"
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
      />
      <div className="use-case-title">С брендом и навигацией</div>
      <RbHeader
        id="header-03"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
      />
      <div className="use-case-title">С брендом, навигацией и темой</div>
      <RbHeader
        id="header-04"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        theme="primary"
      />
      <div className="use-case-title">
        С брендом, навигацией, темой и обозначением темной темы (светлый текст
        бренда, светлые пункты навигации, темный фон выпадающего списка)
      </div>
      <RbHeader
        id="header-05"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        theme="primary"
        dark
      />
      <div className="use-case-title">
        С брендом, навигацией, темой, обозначением темной темы, с монохромным
        изображением бренда
      </div>
      <RbHeader
        id="header-06"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        theme="primary"
        dark
        monochrome
      />
      <div className="use-case-title">
        С брендом, навигацией, темой и центрированным контентом
      </div>
      <RbHeader
        id="header-07"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        theme="warning"
        justifyContent="center"
      />
      <div className="use-case-title">
        С брендом, навигацией, темой, контент обернут в контейнер
      </div>
      <RbHeader
        id="header-08"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        theme="warning"
        container
      />
      <div className="use-case-title">
        С брендом, навигацией, темой, панель навигации скрыта на экранах любой
        ширины (по умолчанию развернутая панель ограничена по высоте и имеет
        автоскролл)
      </div>
      <RbHeader
        id="header-09"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList }}
        theme="warning"
        hidden
      />
      <div className="use-case-title">
        С брендом, навигацией, темой, панель навигации скрыта на экранах шириной
        менее 576px, при ширине экрана 576px и более - панель развернута
      </div>
      <RbHeader
        id="header-10"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList }}
        theme="warning"
        hidden
        hiddenSize="sm"
      />
      <div className="use-case-title">
        С брендом, навигацией, темой, панель навигации скрыта на экранах любой
        ширины, открытие панели в форме сайдбара
      </div>
      <RbHeader
        id="header-11"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList }}
        theme="warning"
        hidden
        offcanvas
      />
      <div className="use-case-title">
        С брендом, навигацией, темой, панель навигации скрыта на экранах любой
        ширины, панель навигации без автоскролла (панель не ограничивается по
        высоте)
      </div>
      <RbHeader
        id="header-12"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList }}
        theme="warning"
        hidden
        noScroll
      />
      <div className="use-case-title">
        С брендом, навигацией, темой, панель навигации скрыта на экранах шириной
        менее 576px, при ширине экрана 576px и более - панель развернута, панель
        навигации без автоскролла (панель не ограничивается по высоте)
      </div>
      <RbHeader
        id="header-13"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList }}
        theme="warning"
        hidden
        hiddenSize="sm"
        noScroll
      />
      {/* <div className="use-case-title">
        Без бренда с всегда свернутой Collapse-панелью навигации
      </div>
      <RbHeader
        id="header-03"
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
      />
      <div className="use-case-title" v>
        Без бренда с Collapse-панелью навигации разворачивающейся при ширине
        окна 576px
      </div>
      <RbHeader
        id="header-04"
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        expand
        expand-size="sm"
      />
      <div className="use-case-title">
        Без бренда с Offcanvas-панелью навигации разворачивающейся при ширине
        окна 576px
      </div>
      <RbHeader
        id="header-05"
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        expand
        expand-size="sm"
        offcanvas
      />
      <div className="use-case-title">
        Без бренда с Collapse-панелью навигации разворачивающейся при ширине
        окна 576px и указанием темы фона
      </div>
      <RbHeader
        id="header-06"
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        expand
        expand-size="sm"
        theme="info"
      />
      <div className="use-case-title">
        Без бренда с Offcanvas-панелью навигации разворачивающейся при ширине
        окна 576px и указанием темы фона
      </div>
      <RbHeader
        id="header-07"
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        expand
        expand-size="sm"
        theme="info"
        offcanvas
      />
      <div className="use-case-title">
        C брендом и Collapse-панелью навигации разворачивающейся при ширине окна
        576px и указанием темы фона
      </div>
      <RbHeader
        id="header-08"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        expand
        expand-size="sm"
        theme="info"
      />
      <div className="use-case-title">
        C брендом и Offcanvas-панелью навигации разворачивающейся при ширине
        окна 576px и указанием темы фона
      </div>
      <RbHeader
        id="header-09"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        expand
        expand-size="sm"
        theme="info"
        offcanvas
      />
      <div className="use-case-title">
        C брендом и Collapse-панелью навигации разворачивающейся при ширине окна
        576px и указанием темы фона, с ограничением высоты Collapse-панели и
        прокруткой панели
      </div>
      <RbHeader
        id="header-10"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList }}
        expand
        expand-size="sm"
        theme="info"
        scroll
      />
      <div className="use-case-title">
        C брендом и Offcanvas-панелью навигации разворачивающейся при ширине
        окна 576px и указанием темы фона, с автоскроллом Collapse-панели
      </div>
      <RbHeader
        id="header-11"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList }}
        expand
        expand-size="sm"
        theme="info"
        scroll
        offcanvas
      />
      <div className="use-case-title">
        C монохромным брендом и Collapse-панелью навигации разворачивающейся при
        ширине окна 576px и указанием темы фона
      </div>
      <RbHeader
        id="header-12"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        expand
        expand-size="sm"
        theme="info"
        monochrome
      />
      <div className="use-case-title">
        C монохромным брендом и Offcanvas-панелью навигации разворачивающейся
        при ширине окна 576px и указанием темы фона
      </div>
      <RbHeader
        id="header-13"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        expand
        expand-size="sm"
        theme="info"
        monochrome
        offcanvas
      />
      <div className="use-case-title">
        C брендом и Collapse-панелью навигации разворачивающейся при ширине окна
        576px и указанием тёмной темы фона
      </div>
      <RbHeader
        id="header-14"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        expand
        expand-size="sm"
        theme="info"
        dark
      />
      <div className="use-case-title">
        C брендом и Offcanvas-панелью навигации разворачивающейся при ширине
        окна 576px и указанием тёмной темы фона
      </div>
      <RbHeader
        id="header-15"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        expand
        expand-size="sm"
        theme="info"
        dark
        offcanvas
      />
      <div className="use-case-title">
        C монохромным брендом и Collapse-панелью навигации разворачивающейся при
        ширине окна 576px и указанием тёмной темы фона
      </div>
      <RbHeader
        id="header-16"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        expand
        expand-size="sm"
        theme="info"
        dark
        monochrome
      />
      <div className="use-case-title">
        C монохромным брендом и Offcanvas-панелью навигации разворачивающейся
        при ширине окна 576px и указанием тёмной темы фона
      </div>
      <RbHeader
        id="header-17"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        expand
        expand-size="sm"
        theme="info"
        monochrome
        dark
        offcanvas
      />
      <div className="use-case-title">
        Контейнерный хедер с монохромным брендом и Collapse-панелью навигации
        разворачивающейся при ширине окна 576px и указанием темы фона (отличие
        от бесконтейнерного можно увидеть, отключив в консоли класс "container"
        у обертки страницы)
      </div>
      <RbHeader
        id="header-18"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        expand
        expand-size="sm"
        theme="info"
        monochrome
        container
      />
      <div className="use-case-title">
        С монохромным брендом и Collapse-панелью навигации разворачивающейся при
        ширине окна 576px и указанием темы фона, выравнивание по центру
      </div>
      <RbHeader
        id="header-19"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        expand
        expand-size="sm"
        theme="info"
        monochrome
        justify-content="center"
      />
      <div className="use-case-title">
        С монохромным брендом и Collapse-панелью навигации разворачивающейся при
        ширине окна 576px и указанием темы фона, равные боковые отступы у
        элементов
      </div>
      <RbHeader
        id="header-20"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        expand
        expand-size="sm"
        theme="info"
        monochrome
        justify-content="around"
      />
      <div className="use-case-title">
        С монохромным брендом и Collapse-панелью навигации разворачивающейся при
        ширине окна 576px и указанием темы фона, одинаковые отступы между
        элементами
      </div>
      <RbHeader
        id="header-21"
        brand={defaultNavBar.brand}
        nav={{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }}
        expand
        expand-size="sm"
        theme="info"
        monochrome
        justify-content="between"
      /> */}
    </>
  );
}

export default HeaderRoute;
