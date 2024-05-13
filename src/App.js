import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import IconRoute from "./routes/IconRoute";
import BadgeRoute from "./routes/BadgeRoute";
import DropdownItemRoute from "./routes/DropdownItemRoute";
import ButtonLinkRoute from "./routes/ButtonLinkRoute";
import ButtonRoute from "./routes/ButtonRoute";
import CollapseRoute from "./routes/CollapseRoute";
import CollapseButtonRoute from "./routes/CollapseButtonRoute";
import NavBarBrandRoute from "./routes/NavBarBrandRoute";
import NavBarRoute from "./routes/NavBarRoute";
import ModalButtonRoute from "./routes/ModalButtonRoute";
import NavLinkRoute from "./routes/NavLinkRoute";
import NavItemRoute from "./routes/NavItemRoute";
import NavRoute from "./routes/NavRoute";
import OffcanvasButtonRoute from "./routes/OffcanvasButtonRoute";
import OffcanvasRoute from "./routes/OffcanvasRoute";
import HeaderRoute from "./routes/HeaderRoute";
import ModalRoute from "./routes/ModalRoute";
import RbHeader from "./components/Bootstrap_5.3.3/RbHeader";

function App() {
  const headerData = {
    brand: {
      type: "router-link",
      href: "/",
      name: "Viewer Studio",
      imageSrc: "images/viewer-logo.svg",
    },
    /*nav: {
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
            theme: "danger",
            pill: true,
            notNullDisplay: true,
            value: 25,
            max: 99,
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
            theme: "danger",
            pill: true,
            notNullDisplay: true,
            value: 25,
            max: 99,
          },
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-collapse",
              name: "Collapse",
              type: "router-link",
              href: "/collapse",
              
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-collapse-button",
              name: "CollapseButton",
              type: "router-link",
              href: "/collapsebutton",
              
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
                theme: "danger",
                pill: true,
                notNullDisplay: true,
                value: 25,
                max: 99,
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
                theme: "danger",
                pill: true,
                notNullDisplay: true,
                value: 25,
                max: 99,
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
          
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-nav",
              name: "Nav",
              type: "router-link",
              href: "/nav",
              active: false,
              disabled: false,
              
            },
            {
              id: "dropdown-link-nav-item",
              name: "NavItem",
              type: "router-link",
              href: "/navitem",
              active: false,
              disabled: false,
              
            },
            {
              id: "dropdown-link-nav-link",
              name: "NavLink",
              type: "router-link",
              href: "/navlink",
              active: false,
              disabled: false,
              
            },
            {
              id: "dropdown-link-nav-dropdown-item",
              name: "DropdownItem",
              type: "router-link",
              href: "/dropdownitem",
              
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
          name: "Tabs",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-tabs",
              name: "Tabs",
              type: "router-link",
              href: "/tabs",
              active: false,
              disabled: false,
              
            },
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
          
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-nav-bar",
              name: "NavBar",
              type: "router-link",
              href: "/navbar",
              active: false,
              disabled: false,
              
            },
            {
              id: "dropdown-link-nav-bar-brand",
              name: "NavBarBrand",
              type: "router-link",
              href: "/navbarbrand",
              active: false,
              disabled: false,
              
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
          
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-offcanvas",
              name: "Offcanvas",
              type: "router-link",
              href: "/offcanvas",
              active: false,
              disabled: false,
              
            },
            {
              id: "dropdown-link-offcanvas-button",
              name: "OffcanvasButton",
              type: "router-link",
              href: "/offcanvasbutton",
              
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
          
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-button",
              name: "Button",
              type: "router-link",
              href: "/button",
              active: false,
              disabled: false,
              
            },
            {
              id: "dropdown-link-button-link",
              name: "ButtonLink",
              type: "router-link",
              href: "/buttonlink",
              active: false,
              disabled: false,
              
            },
          ],
        },
        {
          id: "nav-link-badge",
          name: "Badge",
          type: "router-link",
          href: "/badge",
          
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
            theme: "danger",
            pill: true,
            notNullDisplay: true,
            value: 25,
            max: 99,
          },
        },
      ],
    },*/
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
            theme: "danger",
            pill: true,
            notNullDisplay: true,
            value: 25,
            max: 99,
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
          id: "dropdown-link-collapse",
          name: "Collapse",
          type: "router-link",
          href: "/collapse",

          active: false,
          disabled: false,
        },
        {
          id: "dropdown-link-collapse-button",
          name: "CollapseButton",
          type: "router-link",
          href: "/collapsebutton",

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
            theme: "danger",
            pill: true,
            notNullDisplay: true,
            value: 25,
            max: 99,
          },
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

        {
          id: "nav-link-items-list",
          name: "ItemsList",
          type: "router-link",
          href: "/itemslist",
          active: false,
          disabled: false,
        },
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
        },
        {
          id: "dropdown-link-nav",
          name: "Nav",
          type: "router-link",
          href: "/nav",
          active: false,
          disabled: false,
        },
        {
          id: "dropdown-link-nav-item",
          name: "NavItem",
          type: "router-link",
          href: "/navitem",
          active: false,
          disabled: false,
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

          active: false,
          disabled: false,
        },
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
        {
          id: "nav-link-preloader",
          name: "Preloader",
          type: "router-link",
          href: "/preloader",
          active: false,
          disabled: false,
        },
        {
          id: "dropdown-link-tabs",
          name: "Tabs",
          type: "router-link",
          href: "/tabs",
          active: false,
          disabled: false,
        },
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
        {
          id: "dropdown-link-nav-bar",
          name: "NavBar",
          type: "router-link",
          href: "/navbar",
          active: false,
          disabled: false,
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
        {
          id: "dropdown-link-offcanvas",
          name: "Offcanvas",
          type: "router-link",
          href: "/offcanvas",
          active: false,
          disabled: false,
        },
        {
          id: "dropdown-link-offcanvas-button",
          name: "OffcanvasButton",
          type: "router-link",
          href: "/offcanvasbutton",

          active: false,
          disabled: false,
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

          active: false,
          disabled: false,
        },
        {
          id: "dropdown-link-button",
          name: "Button",
          type: "router-link",
          href: "/button",
          active: false,
          disabled: false,
        },
        {
          id: "dropdown-link-button-link",
          name: "ButtonLink",
          type: "router-link",
          href: "/buttonlink",
          active: false,
          disabled: false,
        },
        {
          id: "nav-link-badge",
          name: "Badge",
          type: "router-link",
          href: "/badge",

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
            theme: "danger",
            pill: true,
            notNullDisplay: true,
            value: 25,
            max: 99,
          },
        },
      ],
    },
  };

  return (
    <div className="App">
      <RbHeader
        id="header"
        expand
        expandSize="xl"
        theme="info"
        dark
        monochrome
        brand={headerData.brand}
        nav={headerData.nav}
        justifyContent="between"
      />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/icon" element={<IconRoute />} />
          <Route path="/badge" element={<BadgeRoute />} />
          <Route path="/dropdownitem" element={<DropdownItemRoute />} />
          <Route path="/buttonlink" element={<ButtonLinkRoute />} />
          <Route path="/button" element={<ButtonRoute />} />
          <Route path="/collapse" element={<CollapseRoute />} />
          <Route path="/collapsebutton" element={<CollapseButtonRoute />} />
          <Route path="/navbarbrand" element={<NavBarBrandRoute />} />
          <Route path="/navbar" element={<NavBarRoute />} />
          <Route path="/modalbutton" element={<ModalButtonRoute />} />
          <Route path="/navlink" element={<NavLinkRoute />} />
          <Route path="/navitem" element={<NavItemRoute />} />
          <Route path="/nav" element={<NavRoute />} />
          <Route path="/offcanvasbutton" element={<OffcanvasButtonRoute />} />
          <Route path="/offcanvas" element={<OffcanvasRoute />} />
          <Route path="/header" element={<HeaderRoute />} />
          <Route path="/modal" element={<ModalRoute />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
